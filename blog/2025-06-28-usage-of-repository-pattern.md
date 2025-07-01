---
authors: arrower
tags: [Tutorial, Arrower, Go]

title: "Usage of the Repository Pattern"
keywords: ["Arrower", "Go", "Golang", "Web Development", "Repository", "Repository Pattern", "DDD", "Domain Driven Design"]
description: ""
#image: ""
slug: "usage-of-repository-pattern"
#last_update: "2024-07-24"
toc_max_heading_level: 4
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
and depending on the usecase different methods make more sense than others.

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


## Alternatives to Query Your Repository
As there are different ways to design the repository, 
there are also different ways to query the data.

### Why Querying at All?
So far, every data access not covered by one of the provided methods
of the Arrower repository has to have a custom method.
The ability to query the repository 
is an alternative to those custom methods.

First, the advantages of creating custom domain methods are,
that they are a very strong and absolutely clear contract of the repository. 
At no time is there any question of what the domain can do.\
Also, it shows you the real cost of developing and maintaining
a lot of special purpose usecases, 
especially ones you start accumulating a lot of them.

Second, the disadvantages are that it is very cumbersome to
setup and maintain, especially when having to support an implementation
for testing and one for production.
Also, looking only at the interface of the domain methods gives you
an understanding of which constraints the data 
and its implementation might have.
Which the queries do not, 
as you don't know which combinations are used and actually called.
This prevents from seeing or knowing how the database is used, and
e.g. which indexes to create.

BUT the ability to query from the domain is so convenient, and
it prevents the overhead of implementing all the custom methods
so that it is worth considering this design tradeoff.

If you want to keep your data access purely in the domain,
just don't use them.

:::note[The ability to query is not intended to be as powerful as SQL.]

You will not find anything like Preload/Join/With, or even pagination.
If you need more than implement your custom method,
which gives you full control for all your needs and design choices
, e.g. in the case of pagination choose a style suited to your application
like page-based, cursor-based or any of the others.

:::

### Access Patterns

#### Query
A direct query for all entities of the repository that satisfy 
the given criteria.

```go
repo.AllBy(ctx, q.Where("Name").Is("test"))
```

The queries provide a consistent and context-aware naming with no ambiguity,
e.g. Dates get `WasToday()`, strings get `Contains()`.
The API supports IDE autocomplete and is somewhat type safe.\
The tradeoff is clearly to make it feel and flow naturally, 
while being an of the shelf component. 
Compile-time checks and absolute type-safety can only be achieved,
by manually defining them or using code generation.
Both are not suitable for a generic repository implementation.
See the alternatives below, if you feel uncomfortable with this.

More complex queries are possible as well.

```go
repo.FindByQ(ctx, q.
    Where("Name").Is("test").
    Or(
        q.Where("Age").Is(1337),
        q.Where("Age").Is(1338),
    )
)
```

:::danger[It is possible to generate invalid queries]

For example, if the column name is invalid, 
or you sort logical sub-condition.

Here the tradeoff of the queries really shows:
They are optimised for simple convenient access to the data store:
as a time saver.\
This does not relieve you of neither taking care nor not testing. 

:::

#### Model Filter

Filters are type save and even more convenient.
They take in a struct and return all entities that satisfy the given values.

Filters only work with exact value matches, 
and all fields have to be satisfied at the same time.
Fields with zero values are ignored.

In this example the struct of the existing domain model `User`
is reused for filtering,
and only the relevant fields are set. 
All other fields are left out.

```go
repo.AllBy(ctx, q.F(domain.User{
    Active: true,
    Group:  "admin",
    // other fields are zero
}))
```

#### Domain Specific Filter
Reusing an existing domain model as a filter is not always a good idea,
as a lot of information on how the data is accessed is hidden.

It's possible to define your own filter structs that represent specific 
intent of the domain with a subset of the fields of the domain model.

```go
repo.AllBy(ctx, q.F(q.AdminUsers{{Active: true, Group: "admin"}}))

type (
    ActiveUsers struct{
        Active bool
    }
    AdminUsers struct{
        Active bool
        Group string
    }
}
```

#### Predefined Domain Queries
To prevent generic queries all over the application, 
it is possible to define domain oriented queries in a central place
and only use them.

This increases type-safety for the caller, 
as he relies only on the defined queries instead of
manually constructing queries int he application layer.

```go
repo.AllBy(ctx, q.ActiveUsers())

func ActiveUsers() Query {
    return Query{Conditions: ConditionGroup{Conditions: []Cond{
        {
            Field:    "Active",
            Operator: "=",
            Value:    true,
        },
    }}}
}
```

Both examples show only access to one such predefined query, 
but it is easy to imagine such a function for each 
domain specific data access.

```go
repo.AllBy(ctx, q.User{}.Active())

type User struct{}

func (u User) Active() Query {
    return Query{Conditions: ConditionGroup{Conditions: []Cond{
        {
            Field:    "Active",
            Operator: "=",
            Value:    true,
        },
    }}}
}
```

#### Flexible Domain Queries

Lastly, it is also possible to offer truly domain oriented 
yet flexible queries.

```go
repo.AllBy(ctx, q.Users().
    Active().
    Adults().
    WithVerifiedEmail().
    Find())

type UserQuery struct {
    Query
}

func Users() *UserQuery {
    return &UserQuery{}
}

func (q *UserQuery) Active() *UserQuery {
    return q
}

func (q *UserQuery) Adults() *UserQuery {
    return q
}

func (q *UserQuery) WithVerifiedEmail() *UserQuery {
    return q
}

func (q *UserQuery) Find() Query {
    return q.Query{}
}
```


## Known Limitations
