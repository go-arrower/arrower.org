---
---




# Database
Arrower only works with Postgres and uses the pgx driver.\
In principle, you can use any other driver for your application.

The Go community has not settled on a shared database abstraction
or way to access application data.

As there is no settled standard, Arrower does not offer any database abstraction.\
You can go with whatever you want, e.g.:
* sqlx
* gorm
* sqlc
* sqlboiler
* bob
* ent
* ...

Whatever you choose, Arrower recommends the Repository pattern
for all database access, so that 
the domain model is not coupled to the database model.
It also makes it easy to test the application.

