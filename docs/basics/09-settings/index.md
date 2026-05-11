---
sidebar_position: 9
slug: settings
---

# Settings

Settings are runtime configuration values that can be changed without restarting your application.
Unlike [configuration](/docs/basics/configuration), which is loaded once at startup, settings persist across restarts
and can be modified dynamically.

Settings are a general-purpose store for any value your application needs at runtime.
Arrower itself uses settings for [logging](/docs/basics/observability/logging#settings), auth, and the admin context.
Use them for your own application needs:

- Feature flags and toggles
- Operational parameters (maintenance mode, rate limits, max users)
- User preferences
- Debug and observability controls
- Any value that should be changeable without redeploying


## Getting Started

```go
settings := setting.NewInMemorySettings()

// Register default values (only sets keys that don't exist yet)
settings.Register(ctx, map[setting.Key]any{
    setting.NewKey("myapp", "general", "maintenance"): false,
    setting.NewKey("myapp", "general", "max_users"):   100,
})

// Read a setting
val, err := settings.Setting(ctx, setting.NewKey("myapp", "general", "maintenance"))
enabled, _ := val.Bool()

// Change a setting at runtime
settings.Save(ctx, setting.NewKey("myapp", "general", "maintenance"), true)
```

:::tip
Use `Register` for defaults at startup. It only writes keys that don't exist yet, so persisted settings survive app restarts.
Use `Save` to create or update a setting.
:::


## Keys

Settings are identified by a composite key with three parts: `context.group.setting`.

```go
key := setting.NewKey("myapp", "feature", "dark_mode")
// key = "myapp.feature.dark_mode"
```

You can also use a plain string as key:

```go
settings.Save(ctx, "my_custom_key", setting.NewValue("my-value"))
```


## Values

`setting.Value` supports all primitive Go types plus structs, slices, and maps (via JSON serialisation).

```go
// Primitives
settings.Save(ctx, key, setting.NewValue("hello"))
settings.Save(ctx, key, setting.NewValue(42))
settings.Save(ctx, key, setting.NewValue(true))
settings.Save(ctx, key, setting.NewValue(3.14))

// Structs and maps (serialised as JSON)
settings.Save(ctx, key, setting.NewValue(map[string]int{"a": 1}))
settings.Save(ctx, key, setting.NewValue(time.Now()))
```

Read values with type-safe getters - no type assertions needed:

```go
val, err := settings.Setting(ctx, key)

// Two-return-value variants for proper error handling
s, err := val.String()
b, err := val.Bool()
i, err := val.Int()
f, err := val.Float64()
t, err := val.Time()

// Must* variants - panic on error, convenient when you know the value exists
s = val.MustString()
b = val.MustBool()
i = val.MustInt()

// Unmarshal into a struct
var result MyStruct
val.Unmarshal(&result)
```


## Implementations

### In-Memory

For testing and development. Values are lost on restart.

```go
settings := setting.NewInMemorySettings()
```

### PostgreSQL

Persisted across restarts. Changes are visible immediately.

```go
settings := setting.NewPostgresSettings(pgxPool)
```

Both implement the same `setting.Settings` interface, so you can swap them freely.


## Arrower Settings

Arrower uses settings internally. You can use the same settings instance across your application.
These are the predefined keys:

| Key | Type | Description |
|-----|------|-------------|
| `alog.SettingLogLevel` | `string` | Change the log level at runtime across all loggers. See [Logging](/docs/basics/observability/logging#settings) |
| `alog.SettingLogUsers` | `[]string` | Show all logs for the given user IDs, independent of the log level |
| `auth.SettingAllowRegistration` | `bool` | Enable or disable user registration |
| `auth.SettingAllowLogin` | `bool` | Enable or disable user login |
| `admin.SettingAutomaticallyPruneJobHistory` | `bool` | Automatically prune old job history entries |
