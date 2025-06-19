---
sidebar_position: 1
slug: logging
description: Log to see what is going on in your application.
---

# Logging

Arrower recommends using `slog.Logger` in your application.\
It comes with its own implementation of `slog.Handler`, to add interesting extra functionalities.



## Introduction

```go
logger := alog.New()
logger := alog.NewDevelopment(pgx)
logger := alog.Test(t)
```

| Environment | Constructor      | Key Features                                                                                                                   |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| production  | `New`            | <ul><li>Defaults to level `INFO`</li><li>Writes to Stderr</li><li>Formats in JSON</li></ul>                                    |
| development | `NewDevelopment` | <ul><li>Defaults to level `DEBUG`</li><li>Writes to Stderr</li><li>Sends logs to local loki & postgres, if available</li></ul> |
| testing     | `Test`           | <ul><li>Writes to buffer</li><li>Semantic assertions for the log output</li></ul>                                              |


### Available Handlers

A logger can take one or multiple handlers that it writes to simultaneously.
You can bring and use your own handler(s).
Any slog Handlers will work.
This gives you more control over your logging needs, compared to one of the default loggers from above. 

```go
logger := alog.New(
    alog.WithHandler(h0),
    alog.WithHandler(h1),
    alog.WithLevel(slog.LevelDebug),
)
```

:::info
The level of a given handler is ignored and the level of the logger is used
for all handlers instead.
:::

| Name                    | Description                                                                  |
|-------------------------|------------------------------------------------------------------------------|
| slog.NewTextHandler     | The standard libraries handler                                               |
| slog.NewJSONHandler     | The standard libraries handler                                               |
| alog.NewLokiHandler     | Use this for local development only!<br/> Sends all logs to a loki instance  |
| alog.NewPostgresHandler | Use this for local development only!<br/> Sends all logs to postgres         |




## Runtime Configuration

To conveniently debug issues, 
the logger supports changing some properties at runtime.


### Change The Log Level

To change the log level of a logger at runtime while it is in use:
```go
alog.Unwrap(logger).SetLevel(slog.LevelDebug)
```
The log level will be changed for all handlers,
independent of their specific configuration.
Changing the log level at runtime doesn't require the creation
of a new logger and your existing dependencies stay valid.

### Settings

To influence the logger, 
even if multiple instances run on different machines, 
settings can be used to dynamically change behaviour at runtime.\
Using the e.g. the postgres settings store,
changes in settings are reflected immediately for subsequent requests.

If used/enabled, it impacts the performance of the logger.

```go
// SettingLogLevel // sets the log level across loggers
// SettingLogUsers // shows all logs for the given users, independent of the log level

// dependency setup
settings := setting.NewInMemorySettings()

logger := alog.New(
    alog.WithLevel(slog.LevelInfo),
    alog.WithSettings(settings),
)

// change setting at run time
settings.Save(ctx, alog.SettingLogUsers, setting.NewValue([]string{userID}))

// http request path
ctx := context.WithValue(ctx, auth.CtxUserID, userID)
logger.DebugContext(ctx, "debug") // appears, although the logger's level is INFO
```




## Writing Log Messages

The Go community has struggled for some time to find good logger interfaces.
Check out Dave Cheney's post [Let's talk about logging](https://dave.cheney.net/2015/11/05/lets-talk-about-logging)
where he makes a compelling argument to only log two things:

* Things that developers care about when they are developing or debugging software. => `DEBUG`
* Things that users care about when using your software. => `INFO`


### `slog` Logger Interface 

Arrower returns always an `slog.Logger` for logging. 
So you can use the known API, and all the available methods 
that Go is offering.

One important consideration though: 
It is recommended to give the context to the methods,
so use `Log()`, `LogAttrs()`, or `InfoCtx()` over `Info()`.
The context carries information to [correlate the logs with traces](#correlate-with-tracing).

### `alog` Logger Interface
Arrower recommends you the use the `slog.Logger` interface.
You probably don't want to bind your code to our logger interface.

That said, the project itself uses a more restricted subset of the `slog` interface, that:
1. encourages the use of methods taking context.Context, so that tracing information can be correlated
2. encourages the use of the levels `DEBUG` and `INFO`, without preventing the others

```go
type Logger interface {
    Log(ctx context.Context, level slog.Level, msg string, args ...any)
    LogAttrs(ctx context.Context, level slog.Level, msg string, attrs ...slog.Attr)
    DebugCtx(ctx context.Context, msg string, args ...any)
    InfoCtx(ctx context.Context, msg string, args ...any)
}
```

### Log Level
Arrower works with the standard slog levels. 
That also means you can define your own log levels.
Arrower uses the following two log levels internally, leaving you some space
to define your own in between, if desired.

```go
const (
    // LevelInfo is used to see what is going on inside Arrower.
    LevelInfo = slog.Level(-8)
    // LevelDebug is used by Arrower developers, if you really want to know what is going on.
    LevelDebug = slog.Level(-12)
)
```




## Request Specific Attributes
Sometimes it is necessary to log request-specific information,
but the logger is usually injected as a dependency, so this is difficult.
You could put a logger into the context and hand it down to the 
place where it is used, or you add the attributes as request scoped 
data only.

All attributes added to the context are logged automatically
by the Arrower logger, provided you use a 
[context aware method](#alog-logger-interface).
```go
ctx = alog.AddAttr(ctx, slog.String("my", "attr"))
ctx = alog.AddAttrs(ctx, slog.String("my", "attr"), slog.String("other", "attr"))
```




## Testing

To ensure what got logged during testing time is easy.
alog comes with a set of semantic assertions and fails your test cases.

```go
func TestMyService(t *testing.T) {
    logger := alog.Test(t)

    // myService(logger)
    // myService.MethodUnderTest()

    logger.NotEmpty()        // assert the logger is not empty
    t.Log(logger.String())   // print all log lines 
}
```




## Correlate With Tracing

Your web applications might span multiple machines.
To make it easy to trace down a "request", 
arrower adds the `traceID` and `spanID`
automatically to each output, if present in the context.

:::note Improve Docs
Screenshot how logs have IDs
:::

In return each log is also recorded as an event in the span, to make it easier to debug
potentially issues.

:::note Improve Docs
Screenshot how traces have logs with all attributes
:::

For more on tracing, see [traces](traces).