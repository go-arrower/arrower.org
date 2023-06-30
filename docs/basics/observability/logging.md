---
sidebar_position: 1
---

# Logging

Log to see what is going on in your application.


## Introduction

Arrower uses the `slog.Logger` as an interface for the application.
It provides its own implementation of `slog.Handler`, to add interesting extra functionalities.

| Environment | Constructor            | Key Features                                                                                                                  |
|-------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| production  | `NewLogger`            | <ul><li>It defaults to the `INFO` level</li><li>Formats in JSON</li><li>Writes to Stderr</li></ul>                            |
| development | `NewDevelopmentLogger` | <ul><li>It defaults to the `DEBUG` level</li><li>Writes Text to the console Stderr</li><li>Sends logs to local loki</li></ul> |
| testing     | `NewTestLogger`        | Writes text to a given `io.Writer`                                                                                            |

## Available Handlers

A logger can take one or multiple handlers that it writes too simultaneously.
You can bring and set your own handler(s) or combinations.

```go
logger := arrower.NewLogger(
    arrower.WithHandler(h0),
    arrower.WithHandler(h1),
)
```

:::info
Please note, that the level of a given handler is ignored and the level of the logger is used
for all handlers.
:::

| Name                | Description                                                                                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slog.NewTextHandler | The standard libraries handler                                                                                                                                           |
| slog.NewJSONHandler | The standard libraries handler                                                                                                                                           |
| NewLokiHandler      | Sends all logs to a loki instance. Use this for local development only!<br/> For production log to Stderr and use docker, kubernetes, or other drivers to ship the logs. |

## Runtime Configuration
To conveniently debug issues, the logger supports changing some properties at runtime.

### Change The Log Level
```go
LogHandlerFromLogger(logger).SetLevel(slog.LevelDebug)
```

## Writing Log Messages

Arrower uses the `slog.Logger` as a API for logging. So you can use all the available methods 
that Go is offering.

The Go community has struggled for some time to find good interfaces, that applies to loggers as well.
Check out Dave Cheney's post [Let's talk about logging](https://dave.cheney.net/2015/11/05/lets-talk-about-logging)
where he makes a compelling argument to only log two things:
* Things that developers care about when they are developing or debugging software. => `DEBUG`
* Things that users care about when using your software. => `INFO`


One important consideration though: It is recommended to give the context to the methods,
so use `Log()`, `LogAttrs()`, or `InfoCtx()` over `Info()`.
The context is carrying information to [correlate the logs with traces](#correlate-with-tracing).  

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