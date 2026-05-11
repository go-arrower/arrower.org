---
sidebar_position: 3
slug: traces
---

# Traces

Arrower uses [OpenTelemetry](https://opentelemetry.io/) 
for distributed tracing with OTLP gRPC as the export protocol.
The TracerProvider is part of the DI container and configured out of the box.
Use any OTEL-compatible backend - 
Tempo is shipped in the Docker Compose for convenience.


## What Gets Traced Automatically

| Component | Span details |
|-----------|-------------|
| HTTP requests | Span per request via otelecho middleware |
| Use cases | Span per invocation, named by use case type |
| Jobs | Trace propagated from enqueue to worker |
| Renderer | Span per template render |
| Postgres | DB operations traced through pgx |

No setup required. 
Traces are collected as long as the DI container initialises the providers.


## Custom Spans

Access the TracerProvider from the container and create your own spans:

```go
tracer := di.TraceProvider.Tracer("myapp")

ctx, span := tracer.Start(ctx, "process-order",
    trace.WithAttributes(attribute.String("order_id", orderID)),
)
defer span.End()

// do work...

if err != nil {
    span.SetStatus(codes.Error, err.Error())
}
```


## Sampling

Arrower adjusts the sampling rate based on the environment:

| Environment | Sampling |
|-------------|----------|
| `local` | 100% - always sample |
| `prod` / `dev` | 60% - parent-based, trace ID ratio |
| `test` | Minimal timeout to avoid blocking tests |

Configure the OTLP endpoint:

```yaml
otel:
  host: localhost
  port: 4317
  hostname: ""
```


## Correlation with Logs

Traces and logs are linked automatically:
- The `traceID` and `spanID` are added to every log line (when present in the context)
- Every log line is recorded as a span event in the corresponding trace

See [Logging](/docs/basics/observability/logging) for details on how this works.


## Viewing Traces

For local development, the Docker Compose ships Grafana and Tempo pre-configured.
Open Grafana, select the Tempo datasource, and search traces.

In production, point your OTEL collector at the OTLP gRPC endpoint.
Any OTEL-compatible backend works - you are not tied to Tempo or Grafana.


## Use Case Decorators

To add tracing to your own use cases, wrap them with the provided decorators:

```go
// Individual decorators
handler := app.NewTracedRequest(di.TraceProvider, NewMyHandler())

// Or apply tracing + metrics + logging at once
handler := app.NewInstrumentedRequest(
    di.TraceProvider, di.MeterProvider, di.Logger,
    NewMyHandler(),
)
```

See [Use Cases - Instrumentation](/docs/basics/usecases#instrumentation) 
for all available decorators.
