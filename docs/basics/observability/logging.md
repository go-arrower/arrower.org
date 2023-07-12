---
sidebar_position: 1
slug: logging
---

# Logging

Log to see what is going on in your application.




## Introduction

Arrower uses `slog.Logger` as an interface for the application.
It provides its own implementation of `slog.Handler`, to add interesting extra functionalities.

```go
logger := alog.New()
logger  = alog.NewDevelopment()
logger  = alog.NewTest(nil)
```

| Environment | Constructor      | Key Features                                                                                               |
|-------------|------------------|------------------------------------------------------------------------------------------------------------|
| production  | `New`            | <ul><li>Defaults to level `INFO`</li><li>Formats in JSON</li><li>Writes to Stderr</li></ul>                |
| development | `NewDevelopment` | <ul><li>Defaults to level `DEBUG`</li><li>Writes text to Stderr</li><li>Sends logs to local loki</li></ul> |
| testing     | `NewTest`        | <ul><li>Writes text to a given `io.Writer`</li><li>If `nil`, all logs are discarded</li></ul>              |




## Available Handlers

A logger can take one or multiple handlers that it writes too simultaneously.
You can bring and set your own handler(s).
This gives you more control over your logging needs, compared to one of the default loggers from above. 

```go
logger := alog.New(
    alog.WithHandler(h0),
    alog.WithHandler(h1),
)
```

:::info
Please note, that the level of a given handler is ignored and the level of the logger is used
for all handlers instead.
:::

| Name                | Description                                                                                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slog.NewTextHandler | The standard libraries handler                                                                                                                                           |
| slog.NewJSONHandler | The standard libraries handler                                                                                                                                           |
| NewLokiHandler      | Sends all logs to a loki instance. Use this for local development only!<br/> For production log to Stderr and use docker, kubernetes, or other drivers to ship the logs. |




## Runtime Configuration

To conveniently debug issues, the logger supports changing some properties at runtime.

### Change The Log Level

The log level will be changed for all handlers, independent of their specific configuration. 

```go
alog.Unwrap(logger).SetLevel(slog.LevelDebug)
```




## Writing Log Messages

### `slog` Logger Interface 

Arrower returns always an `slog.Logger` for logging. So you can use the known API and all the available methods
that Go is offering.

The Go community has struggled for some time to find good interfaces, that applies to loggers as well.
Check out Dave Cheney's post [Let's talk about logging](https://dave.cheney.net/2015/11/05/lets-talk-about-logging)
where he makes a compelling argument to only log two things:

* Things that developers care about when they are developing or debugging software. => `DEBUG`
* Things that users care about when using your software. => `INFO`

One important consideration though: It is recommended to give the context to the methods,
so use `Log()`, `LogAttrs()`, or `InfoCtx()` over `Info()`.
The context is carrying information to [correlate the logs with traces](#correlate-with-tracing).

### `alog` Logger Interface
Arrower recommends you the use the `slog.Logger` interface.
You probably don't want to bind your code to our logger interface.

That said, the project itself uses a more restricted subset of the `slog` interface, that:
1. encourages the use of methods taking context.Context, so that tracing information can be correlated
2. encourages the use of the levels `DEBUG` and `INFO`, without preventing the others
   (as Arrower has its own levels in case you want to see what its doing)

```go
type Logger interface {
	Log(ctx context.Context, level slog.Level, msg string, args ...any)
	LogAttrs(ctx context.Context, level slog.Level, msg string, attrs ...slog.Attr)
	DebugCtx(ctx context.Context, msg string, args ...any)
	InfoCtx(ctx context.Context, msg string, args ...any)
}
```




## Correlate With Tracing

As Arrower encourages web applications running in the cloud, they might span multiple machines.
To make it easy to trace down a "request", arrower adds the `traceID` and `spanID` (if present)
automatically to each output.

:::note Improve Docs
Screenshot how logs have IDs
:::

In return each log is also recorded as an event in the span, to make it easier to debug
potentially issues.

:::note Improve Docs
Screenshot how traces have logs with all attributes
:::

For more on tracing, see [traces](traces).