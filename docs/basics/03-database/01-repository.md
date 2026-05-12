---
---




# Repository

## Recommended Approach
The repository pattern is well known and there are good resources
available to learn about it.

Arrower believes the repository represents actions from the domain 
=> `FindByLoginName()`

:::tip
It is **strongly recommended** you implement your repositories yourself
in whatever technology you like!
:::




## Convenience Helpers
If you're using the repository pattern it is cumbersome 
to always implement an in-memory copy of the repository (for testing) and 
the real one.

The approach arrower is taking:
* as repository has to be implemented each time there is a helper:
    * the following interfaces are provided as in memory and pg implementation
    * extend and overwrite them to fit them to your domain

:::warning
The provided implementations are convenience helpers and 
assume you know what you're doing!\
They are not an ORM and very simplistic on purpose!
:::

:::tip
Use the Arrower provided repository only for simple CRUD 
and throwaway prototypes.\
Don't limit yourself to the methods offered out of the box and 
implement your own custom method and behaviour as you need!\
There is nothing more powerful than a well crafted SQL query 
behind your domain focussed repository method.
:::




As simple repositories share a repeating set of methods,
Arrower offers commonly used methods ready out of the box.
In general, it is good practise to keep your own repository methods to a minimum.
Arrower offers a lot for your convenience, so you have a buffet to choose from,
**not** as a recommendation to use all of them at all times!


```go title="repository.go"
type Repository[E any, ID id] interface {
    NextID(ctx context.Context) (ID, error)

    Create(ctx context.Context, entity E) error
    Read(ctx context.Context, id ID) (E, error)
    Update(ctx context.Context, entity E) error
    Delete(ctx context.Context, entity E) error

    All(ctx context.Context) ([]E, error)
    AllBy(ctx context.Context, query q.Query) ([]E, error)
    AllByIDs(ctx context.Context, ids []ID) ([]E, error)

    FindByID(ctx context.Context, id ID) (E, error)
    FindBy(ctx context.Context, query q.Query) (E, error)

    Exists(ctx context.Context, id ID) (bool, error)
    ExistsByID(ctx context.Context, id ID) (bool, error)
    ExistByIDs(ctx context.Context, ids []ID) (bool, error)
    ExistAll(ctx context.Context, ids []ID) (bool, error)
    Contains(ctx context.Context, id ID) (bool, error)
    ContainsID(ctx context.Context, id ID) (bool, error)
    ContainsIDs(ctx context.Context, ids []ID) (bool, error)
    ContainsAll(ctx context.Context, ids []ID) (bool, error)

    CreateAll(ctx context.Context, entities []E) error
    Save(ctx context.Context, entity E) error
    SaveAll(ctx context.Context, entities []E) error
    UpdateAll(ctx context.Context, entities []E) error
    Add(ctx context.Context, entity E) error
    AddAll(ctx context.Context, entities []E) error

    Count(ctx context.Context) (int, error)
    Length(ctx context.Context) (int, error)

    DeleteByID(ctx context.Context, id ID) error
    DeleteByIDs(ctx context.Context, ids []ID) error
    DeleteAll(ctx context.Context) error
    Clear(ctx context.Context) error

    AllIter(ctx context.Context) Iterator[E, ID]
}
```




```go
var repo YourRepositoryType = arepo.NewMemoryRepository[Entity, EntityID]()
```

It is implicitly assumed that the entity has a field named `ID` with an underlying type of `string` or `int`.
That field will be used as the primary key.
You can change the field name:
```go 
repo := arepo.NewMemoryRepository[E, I](
	arepo.WithIDField("YourPKField"),
)
```

The repository will probably not match all your needs, see how to
[extend](https://github.com/go-arrower/arrower/blob/master/arepo/inmemory.example_extend_test.go) and
[overwrite or fine tune](https://github.com/go-arrower/arrower/blob/master/arepo/inmemory.example_overwrite_test.go)
it, so it fits all your applications needs.


```go title="Direct use of generic repository"
// define the repository in the domain 
type UserRepository interface {
    Save(ctx context.Context, user User) error
    FindByID(ctx context.Context, id UserID) (User, error)
    Delete(ctx context.Context, user User) error
}

// usage in your application
var repo UserRepository = arepo.NewMemoryRepository[User, UserID](),
```

```go title="Wrap the generic repository"
// define the repository in the domain 
type UserRepository interface {
    Save(ctx context.Context, user User) error
    FindByID(ctx context.Context, id UserID) (User, error)
    Delete(ctx context.Context, user User) error
}

// implement the repository in the interfaces layer
func NewInMemoryUserRepository() *InMemoryUserRepository {
    return &InMemoryUserRepository{
        MemoryRepository: arepo.NewMemoryRepository[User, UserID](),
    }
}

var _ UserRepository = (*InMemoryUserRepository)(nil)

type InMemoryUserRepository struct {
    *arepo.MemoryRepository[User, UserID]
}

// usage in your application
var repo UserRepository = NewInMemoryUserRepository()
```




## Testing

1. Classical way
```go
repo := arepo.NewMemoryRepository[testdata.Entity, testdata.EntityID]()
c, _ := repo.Count(ctx)
assert.Equal(t, 0, c, "repo should be empty")
```

2. Build in assertions in the default repository
```go
repo := arepo.Test[testdata.Entity, testdata.EntityID](t)
repo.Empty()
```

3. Assertion helper for any / custom repositories
```go
repo := NewMyCustomRepository[Entity, EntityID]()
rassert := arepo.TestAssert[Entity, EntityID](t, repo)
rassert.Empty()
```

4. Embed assertions into custom repository
```go
repo := NewMyCustomTestRepository(t)
repo.Empty()

func NewMyCustomTestRepository(t *testing.T) *MyCustomRepository {
    repo := arepo.NewMemoryRepository[Entity, EntityID]()
    return &MyCustomRepository{
        MemoryRepository: repo,
        TestAssertions:   arepo.TestAssert(t, repo),
    }
}

type MyCustomRepository struct {
    *arepo.MemoryRepository[Entity, EntityID]
    *arepo.TestAssertions[Entity, EntityID]
}
```