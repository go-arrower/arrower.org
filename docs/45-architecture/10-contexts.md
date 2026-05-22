---
---
import DocCardList from '@theme/DocCardList';


# Contexts

Contexts are Arrower's unit of modularity.
Each Context is a self-contained slice of your application
with its own routes, views, database schema, and dependencies.


## Available Contexts

<DocCardList items={[{
type: 'link',
href: '/docs/architecture/auth',
label: 'Auth Context',
description: 'All things related to authentication.',
}]} />


## Context API

Each Context has a Startup API and a Context/Module/Service API.

:::note
Add diagram
:::

For convenience a Context can take global dependencies like the database connection,
but it is also possible to have each Context completely independent and manage its own configuration
and dependencies.

Each Context is using its own schema in the postgres database, so that it is completely isolated from other Contexts.
Do not access or join those schemas directly, or you will couple the app on the data layer.


## Build your own Contexts
### Shared Contexts
