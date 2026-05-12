---
---




# Database
Arrower only works with Postgres and uses the pgx driver.\
In principle, you can use any other driver for your application.


## Why no ORM?

The Go ecosystem has not settled on a single database abstraction. And that is fine.
Arrower does not ship an ORM because no ORM fits all cases.
Eventually you hit the edge where it generates sub-optimal queries
or can not express the join you need.
And for trivial schemas you don't need one in the first place.

Arrower's take: use plain SQL with a scanner like [sqlx](https://jmoiron.github.io/sqlx/)
to map rows into structs. Pick a tool that does 80 % of the work and still lets you
drop down to raw SQL when you need to.

Popular options in the Go ecosystem:
* [sqlx](https://jmoiron.github.io/sqlx/): thin extension over database/sql
* [sqlc](https://sqlc.dev/): generate type-safe Go from SQL
* [gorm](https://gorm.io/): full-featured ORM
* [ent](https://entgo.io/): entity framework with code generation
* [bob](https://bob.stephenafamo.com/): SQL-first query builder
* [sqlboiler](https://github.com/volatiletech/sqlboiler): schema-driven ORM
* ...


## Repository Pattern

Whatever you choose, Arrower recommends the Repository pattern
for all database access.
It keeps the domain model decoupled from the database model and simplifies testing.

To get you started, Arrower ships [ready-to-use CRUD repositories](/docs/basics/database/repository)
with two clear extension points:

* **Extend**: embed the repository and add your own domain-specific methods
  (e.g. `FindByLogin`). See the [Extend a Repository](/docs/guides/extend-repository) guide.
* **Overwrite**: embed the repository and replace any built-in method with your own
  implementation (e.g. a tuned `Count`). See the
  [Overwrite a Repository Method](/docs/guides/overwrite-repository-method) guide.

Both work the same way: embed `*arepo.PostgresRepository` (or the in-memory variant)
in your own struct, then add or shadow methods as needed.
The boring CRUD plumbing is out of your way and you keep full control
when the domain demands it.

