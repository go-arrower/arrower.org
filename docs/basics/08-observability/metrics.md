---
sidebar_position: 2
slug: metrics
---

# Metrics

Arrower uses [OpenTelemetry](https://opentelemetry.io/) for metrics 
with a Prometheus exporter.
The MeterProvider is part of the DI container and configured out of the box.
Use any OTEL-compatible backend - Prometheus + Grafana 
are shipped in the Docker Compose for convenience.


## What Gets Measured Automatically

| Component | Metrics |
|-----------|---------|
| HTTP requests | Request count, duration, errors (via otelecho middleware) |
| Use cases | Invocation counter, duration histogram per use case type |
| Jobs | Processed count, duration per queue and job type |
| Renderer | Template render count and duration |

No setup required. 
These metrics are collected as long as the DI container initialises the providers.


## Custom Metrics

Access the MeterProvider from the container and create your own instruments:

```go
meter := di.MeterProvider.Meter("myapp")

counter, _ := meter.Int64Counter("orders_created",
    metric.WithDescription("Total orders created"),
)

counter.Add(ctx, 1, metric.WithAttributes(
    attribute.String("region", "eu-west"),
))
```


## Endpoint

Metrics are served on a **separate port** from your application,
so the endpoint can be protected from public access and only reachable 
by your infrastructure.

Configuration:

```yaml
http:
  status_endpoint_enabled: true
  status_endpoint_port: 2223
```

| Path | Description |
|------|-------------|
| `:2223/metrics` | Prometheus scrape endpoint |
| `:2223/status` | Application health and system status |

Disable with `status_endpoint_enabled: false`.


## Viewing Metrics

For local development, the Docker Compose ships 
Grafana and Prometheus pre-configured.
Point your browser at Grafana and the Arrower dashboard is ready.

In production, point your Prometheus instance at the metrics endpoint.
Any OTEL-compatible backend works - you are not tied to Grafana or Prometheus.


## Use Case Decorators

To add metrics to your own use cases, wrap them with the provided decorators:

```go
// Individual decorators
handler := app.NewMeteredRequest(di.MeterProvider, NewMyHandler())

// Or apply tracing + metrics + logging at once
handler := app.NewInstrumentedRequest(
    di.TraceProvider, di.MeterProvider, di.Logger,
    NewMyHandler(),
)
```

See [Use Cases - Instrumentation](/docs/basics/usecases#instrumentation) 
for all available decorators.
