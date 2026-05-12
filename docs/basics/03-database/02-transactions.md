---
---




# Transactions

Transactions are part of the request's `ctx`.
This prevents the need to add a transaction parameter to each method,
keeping the method signatures smaller.
And as a transaction is typically tied to a http request,
it makes sense to include it into the requests context.

The transaction is saved with the key `postgres.CtxTX`.

[Jobs](/docs/basics/jobs) set the transaction automatically,
so you can make changes inside the same transaction as the job itself is running on.
[Usecases](/docs/basics/usecases) need to be decorated explicitly.
Use the decorators `app.NewTxRequest()` and `app.NewTxCommand()`.

Both decorators auto-rollback on error and commit on success.

Repositories pick up the transaction from `ctx` automatically,
so all database operations within the same request share the same transaction.