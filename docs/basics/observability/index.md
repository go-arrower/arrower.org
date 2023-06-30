---
---
import DocCardList from '@theme/DocCardList';

# Observability

To properly understand what is going on inside your application,
you can collect a whole range of telemetry.

> An application is properly instrumented when developers don’t need to add more instrumentation to troubleshoot an issue, because they have all of the information they need.  
> [https://opentelemetry.io/docs/concepts/observability-primer/](https://opentelemetry.io/docs/concepts/observability-primer/)

You can bring your own observability stack. Arrower does not force you into any specific direction,
our recommendation is however: Grafana, Loki, Prometheus, and Tempo.

For metrics and traces Arrower uses [OTEL](https://opentelemetry.io/),
for logging the new `slog` from the Go standard library.



:::note Improve Docs
Screenshot how logs & trances & metrics are linked in Grafana
:::

To quickstart your development the `docker-compose.yaml` file contains everything you need locally
and can give inspiration on how to setup your own infrastructure.

<br />
<br />

<DocCardList />

