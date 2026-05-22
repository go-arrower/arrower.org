---
---


# Architecture

Arrower's architecture is built around a few core concepts
that shape how your application is structured and grows over time.
The patterns scale with you from a single developer shipping a side project
to multiple teams working on a larger codebase.
Start simple and adopt concepts as your app and organisation require them.


## Use Cases

The application layer is organised into **Use Cases**: 
small, focused handlers for every piece of business logic. 
Each Use Case is one of four primitives:
*Request*, *Command*, *Query*, or *Job*.
This keeps your domain logic testable, composable, and decoupled from HTTP handlers
and infrastructure.

You don't have to use Use Cases from the start.
For simple applications, fat controllers work fine,
put the logic directly in your route handler and ship it.
When complexity grows, and you need reusability, testability, or instrumentation,
extract logic into Use Cases. 
The refactoring path is straightforward.

See [Use Cases](/docs/architecture/usecases) for the full reference.


## Contexts

Related functionality is grouped into **Contexts**:
isolated modules inspired by DDD bounded contexts. 
Think of them as a component in a component architecture,
or a module in a majestic modular monolith.

Each Context is optional, owns its own database schema, and manages its own dependencies.
The boundaries are clean from day one, so splitting into services later is straightforward
if the need arises.

Every new Arrower app starts with a single **shared Context**.
Keep everything there while you're a solo developer or a small team.
Only create additional Contexts when the business and organisation demand it.
Not because the pattern exists.

Arrower ships with two built-in Contexts:
* **Auth Context**: email + password authentication, route protection, user management
* **Admin Context**: out-of-the-box admin dashboard for queues, users, and settings

See [Contexts](/docs/architecture/contexts) for how they work and how to build your own.


## Project Structure

<!-- TODO: explain where new features go, how the layers (domain/application/interfaces/views) relate, and when code graduates from shared context to its own. Getting Started shows the tree but doesn't explain conventions. -->


## Dependency Injection

<!-- TODO: how dependencies are wired, how controllers get their use cases, how to register new services. Currently undocumented. -->

