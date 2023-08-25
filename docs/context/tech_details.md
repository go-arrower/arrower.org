---
sidebar_position: 99
---

# Technical Details

A short overview of how Contexts work.

## Getting Started
Each Context has a Startup API and a Context/Module/Service API.

:::note
Add diagram
:::

For convenience a Context can take global dependencies like the database connection,
but it is also possible to have each Context completely independent and manage its own configuration
and dependencies.

Each Context is using its own schema in the postgres database, so that it is completely isolated from other Contexts.
Do not access or join those schemas directly, or you will couple the app on the data layer.

