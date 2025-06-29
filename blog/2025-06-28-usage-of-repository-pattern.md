---
authors: arrower
tags: [Tutorial, Arrower, Go]

title: "Usage of the Repository Pattern"
keywords: ["Arrower", "Go", "Golang", "Web Development", "Repository", "Repository Pattern", "DDD", "Domain Driven Design"]
description: ""
#image: ""
slug: "usage-of-repository-pattern"
#last_update: "2024-07-24"
draft: true
---


# Usage of the Repository Pattern

The repository pattern originates from Domain Driven Design and abstracts
the access to a data store. 
It is commonly used in enterprise software, and many Go developers 
use it in their applications.

[Arrower provides a flexible repository implementation](/docs/basics/database/repository) 
despite the limited abstractions Go offers.


<!-- truncate -->


## The Arrower Repository is a Buffet not a Commandment
Arrower advocates for the use of the repository pattern.
To get started quickly, there are multiple base implementations shipping 
ready to use out of the box.

The provided repositories have a wide range of methods implemented.
So much so, that the interface can rightfully be viewed as appalling because
of the shear number of methods.\
It is not intended that you use all those methods! 
**Choose only the methods you really need.**\
The purpose is to give you a quick start 
and depending on the use case different methods make more sense than others.

**It is expected that you implement custom domain methods!**
At no time feel restricted by the choice of methods provided by Arrower.\
It is a design decision that you have to make for your application:
how many generic methods and filters you 
want to use versus how tailored to the domain should your repositories be?

It is easy to [extend a repository with own methods](/docs/guides/extend-repository)
or even to [change the behaviour of an existing method](/docs/guides/overwrite-repository-method). 

:::note[Keep your domain free of Arrower]

For many projects, it is important to keep the domain package free of
third party code and limit the coupling to a framework to the outer layers.

To achieve this:
* define your repository interfaces in your domain and only use the 
  Arrower implementations via dependency injection
* alias the errors
* alias the query package (if you use it)

This is also the reason Arrower does not offer smaller or
atomic interfaces,
to prevent you from embedding them into your interface definition.
See alternatives for this below.

:::


## Alternatives to Design Your Repositories

### The Custom Repository Interface
The custom repository interface contains exactly the methods the
application requires.

```go
package user

type Repository interface {
    All(ctx context.Context) ([]User, error)
    FindByLogin(ctx context.Context, login string) (User, error)
}
```

This is a mix of generic methods provided by Arrower: `All`,
and domain-specific methods tailored to 
the application's domain: `FindByLogin`.

This restricts the methods of the repository down 
to only the actually used ones and removes all the clutter.
Inject the Arrower implementation (or your extended implementation) 
that has all the methods,
but still only have the methods available in the application
that you actually need to have.

Although, overwriting any method is possible the default behaviour works 
out of the box and only the custom domain methods need to be implemented.\
The drawback is, you need to know which signatures Arrower offers
and appropriate them.


### The Generic Repository
A generic or base repository is a set of methods
that live inside your domain and are used for all entities.
It's possible to restrict it to a subset of the Arrower methods, 
or an own set of methods with a generic implementation.

```go
type BaseRepository[E any, ID string] interface {
    Create(ctx context.Context, entity E) error
    Read(ctx context.Context, id ID) (E, error)
    Update(ctx context.Context, entity E) error
    Delete(ctx context.Context, entity E) error
    All(ctx context.Context) ([]E, error)
}
```

This approach does not require you to define a repository for each entity, 
and the repositories are homogeneous throughout the application.

The lack of domain-specific methods could be acceptable. 
In case it's not, combine the approach by embedding the generic repository
and extending it according to the domain's needs.

```go
type UserRepository interface {
    BaseRepository[User, string]
    FindByLogin(ctx context.Context, login string) (User, error)
}
```

### Specialised Repositories by Role and Responsibility

Specialised repositories are a design decision of the software system,
and they come in different flavours.

In case you have different data access needs or business logic,
providing role-specific repositories 
e.g. `CustomerRepository`, or `AdminRepository` might be a solution.\
Or if you're doing CQRS,
the interfaces can be separated according to the 
read or write responsibilities, and you might define
a `QueryRepository` and a `CommandRepository` and so forth.

This clearly prevents calling methods, 
that should not be accessible to the caller in a reusable way. 
Minimising the number of custom repositories,
while still using one implementation to minimise
the effort to support all those repositories.


:::note[Do you use the same Repository for Testing?]

It makes a lot of sense to use your domain repository in testing.\
At the same time the (extended) implementation of the repository
does contain all the methods, and they can be used during testing time.

This is a design decision and tradeoff to make. 

:::