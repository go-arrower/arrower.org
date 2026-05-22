---
---




# Migrations

Arrower uses [golang-migrate](https://github.com/golang-migrate/migrate) and plain SQL files.
No magic, no generated code, you write the SQL,
and you know exactly what runs against your database.

You can use any migration tool you prefer `golang-migrate` is what arrower uses internally.
The only contract is that your app's tables exist when the code tries to access them.


## How It Works

Migrations are embedded into the binary and run automatically every time the application starts:

```go
//go:embed migrations/*.sql
var Migrations embed.FS
```

```go
// passed to arrower on initialisation
arrower.InitialiseDefaultDependencies(ctx, &conf.Config, postgres.Migrations, ...)
```

`ConnectAndMigrate()` applies all pending `up` migrations on startup.
If no migrations FS is provided, arrower falls back to its own default migrations
that set up the framework tables.

No manual step needed during normal development.


## Schema Layout

Arrower uses multiple Postgres schemas to separate concerns:

| Schema | Contents |
|--------|----------|
| `public` | Your application tables + `schema_migrations` |
| `arrower` | Framework tables (jobs, log, settings) |
| `auth` | User, session, verification tables |

The `search_path` is set to `public,arrower`, so queries hit both schemas
without needing a schema prefix.

The default migrations also ship a reusable `updated_at` trigger.
Call it on any table with a `updated_at` column:
```sql
SELECT enable_automatic_updated_at('arrower.gue_jobs');
```


## Writing Migrations

Create a new migration:
```shell
migrate create -ext sql -dir shared/infrastructure/postgres/migrations -seq create_users_table
```

This creates a paired `up` and `down` file, named sequentially:
```
000001_create_schema_arrower.up.sql
000001_create_schema_arrower.down.sql
```

Wrap each migration in a transaction:
```sql
BEGIN;

CREATE TABLE ...;

COMMIT;
```


## CLI Commands

The migrate CLI is installed as part of the [getting started](/docs/getting-started) setup.

```shell
export POSTGRESQL_URL='postgres://example:secret@localhost:5432/example?sslmode=disable'

migrate create -ext sql -dir shared/infrastructure/postgres/migrations -seq create_users_table
migrate -database ${POSTGRESQL_URL} -path shared/infrastructure/postgres/migrations up
migrate -database ${POSTGRESQL_URL} -path shared/infrastructure/postgres/migrations down 1
```

See the [golang-migrate CLI docs](https://github.com/golang-migrate/migrate/blob/master/cmd/migrate/README.md)
and the [PostgreSQL Tutorial](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md)
for the full command reference.

### Dirty Flag

When a migration fails mid-way, golang-migrate sets a `dirty` flag
in the `schema_migrations` table and refuses to run further.
Fix it by forcing to the last known good version:

```shell
migrate -database ${POSTGRESQL_URL} -path shared/infrastructure/postgres/migrations force <version>
```
