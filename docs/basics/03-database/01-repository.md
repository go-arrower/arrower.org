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


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="entity" label="Entity Repository" default>
```go title="repository.go"
type Repository[E any, ID id] interface {
    NextID(ctx context.Context) (ID, error)

    Create(ctx context.Context, entity E) error
    Read(ctx context.Context, id ID) (E, error)
    Update(ctx context.Context, entity E) error
    Delete(ctx context.Context, entity E) error
    
    All(ctx context.Context) ([]E, error)
    AllByIDs(ctx context.Context, ids []ID) ([]E, error)
    FindAll(ctx context.Context) ([]E, error)
    FindByID(ctx context.Context, id ID) (E, error)
    FindByIDs(ctx context.Context, ids []ID) ([]E, error)
    Exists(ctx context.Context, id ID) (bool, error)
    ExistsByID(ctx context.Context, id ID) (bool, error)
    ExistByIDs(ctx context.Context, ids []ID) (bool, error)
    ExistAll(ctx context.Context, ids []ID) (bool, error)
    Contains(ctx context.Context, id ID) (bool, error)
    ContainsID(ctx context.Context, id ID) (bool, error)
    ContainsIDs(ctx context.Context, ids []ID) (bool, error)
    ContainsAll(ctx context.Context, ids []ID) (bool, error)
    
    Save(ctx context.Context, entity E) error
    SaveAll(ctx context.Context, entities []E) error
    UpdateAll(ctx context.Context, entities []E) error
    Add(ctx context.Context, entity E) error
    AddAll(ctx context.Context, entities []E) error
    
    Count(ctx context.Context) (int, error)
    Length(ctx context.Context) (int, error)
    Empty(ctx context.Context) (bool, error)
    IsEmpty(ctx context.Context) (bool, error)
    
    DeleteByID(ctx context.Context, id ID) error
    DeleteByIDs(ctx context.Context, ids []ID) error
    DeleteAll(ctx context.Context) error
    Clear(ctx context.Context) error
}
```
  </TabItem>
  <TabItem value="tenant" label="Tenant Repository">
```go title="tenant.repository.go"
type TenantRepository[T any, tID id, E any, eID id] interface {
    NextID(ctx context.Context, tenantID tID) (eID, error)
    
    Create(ctx context.Context, tenantID tID, entity E) error
    Read(ctx context.Context, tenantID tID, id eID) (E, error)
    Update(ctx context.Context, tenantID tID, entity E) error
    Delete(ctx context.Context, tenantID tID, entity E) error
    
    All(ctx context.Context) ([]E, error)
    AllOfTenant(ctx context.Context, tenantID tID) ([]E, error)
    AllByIDs(ctx context.Context, tenantID tID, ids []eID) ([]E, error)
    FindAll(ctx context.Context) ([]E, error)
    FindAllOfTenant(ctx context.Context, tenantID tID) ([]E, error)
    FindByID(ctx context.Context, tenantID tID, id eID) (E, error)
    FindByIDs(ctx context.Context, tenantID tID, ids []eID) ([]E, error)
    Exists(ctx context.Context, tenantID tID, id eID) (bool, error)
    ExistsByID(ctx context.Context, tenantID tID, id eID) (bool, error)
    ExistByIDs(ctx context.Context, tenantID tID, ids []eID) (bool, error)
    ExistAll(ctx context.Context, tenantID tID, ids []eID) (bool, error)
    Contains(ctx context.Context, tenantID tID, id eID) (bool, error)
    ContainsID(ctx context.Context, tenantID tID, id eID) (bool, error)
    ContainsIDs(ctx context.Context, tenantID tID, ids []eID) (bool, error)
    ContainsAll(ctx context.Context, tenantID tID, ids []eID) (bool, error)
    
    Save(ctx context.Context, tenantID tID, entity E) error
    SaveAll(ctx context.Context, tenantID tID, entities []E) error
    UpdateAll(ctx context.Context, tenantID tID, entities []E) error
    Add(ctx context.Context, tenantID tID, entity E) error
    AddAll(ctx context.Context, tenantID tID, entities []E) error
    
    Count(ctx context.Context) (int, error)
    CountOfTenant(ctx context.Context, tenantID tID) (int, error)
    Length(ctx context.Context) (int, error)
    LengthOfTenant(ctx context.Context, tenantID tID) (int, error)
    Empty(ctx context.Context) (bool, error)
    EmptyTenant(ctx context.Context, tenantID tID) (bool, error)
    IsEmpty(ctx context.Context) (bool, error)
    IsEmptyTenant(ctx context.Context, tenantID tID) (bool, error)
    
    DeleteByID(ctx context.Context, tenantID tID, id eID) error
    DeleteByIDs(ctx context.Context, tenantID tID, ids []eID) error
    DeleteAll(ctx context.Context) error
    DeleteAllOfTenant(ctx context.Context, tenantID tID) error
    Clear(ctx context.Context) error
    ClearTenant(ctx context.Context, tenantID tID) error
}
```
  </TabItem>
</Tabs>



```go title="Direct use of generic repository"
// define the repository in the domain 
type UserRepository interface {
    Save(ctx context.Context, user User) error
    FindByID(ctx context.Context, id UserID) (User, error)
    Delete(ctx context.Context, user User) error
}

// usage in your application
var repo UserRepository = repository.NewMemoryRepository[User, UserID](),
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
        MemoryRepository: repository.NewMemoryRepository[User, UserID](),
    }
}

var _ UserRepository = (*InMemoryUserRepository)(nil)

type InMemoryUserRepository struct {
    *repository.MemoryRepository[User, UserID]
}

// usage in your application
var repo UserRepository = NewInMemoryUserRepository()
```




## Testing

1. Classical way
```go
repo := repository.NewMemoryRepository[testdata.Entity, testdata.EntityID]()
c, _ := repo.Count(ctx)
assert.Equal(t, 0, c, "repo should be empty")
```
[go.mod](..%2F..%2F..%2F..%2Farrower%2Fgo.mod)
2. Build in assertions in the default repository
```go
repo := repository.Test[testdata.Entity, testdata.EntityID](t)
repo.Empty()
```

3. Assertion helper for any / custom repositories
```go
repo := NewMyCustomRepository[Entity, EntityID]()
rassert := repository.TestAssert[Entity, EntityID](t, repo)
rassert.Empty()
```

4. Embed assertions into custom repository
```go
repo := NewMyCustomTestRepository(t)
repo.Emtpy()

func NewMyCustomTestRepository(t *testing.T) *MyCustomRepository {
    repo := repository.NewMemoryRepository[Entity, EntityID]()
    return &MyCustomRepository{
        MemoryRepository: repo,
        TestAssertions:   repository.TestAssert(t, repo),
    }
}

type MyCustomRepository struct {
    *repository.MemoryRepository[Entity, EntityID]
    *repository.TestAssertions[Entity, EntityID]
}
```