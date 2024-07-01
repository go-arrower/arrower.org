---
---




# Database
Arrower only works with Postgres. 

Arrower uses the pgx driver. In principle, you can use another one for your application.

Arrower does not offer any database abstraction. The Go community does not settle on any standard.
You can go with whatever you want, e.g.
* sqlx
* gorm
* sqlc
* sqlboiler
* ent
* ...

Arrower recommends the Repository pattern for all database access,
so that the domain model is not coupled to the database model.
It also makes it easy to test the application with an in memory repository.

The approach arrower is taking:
* the repository represents actions from the domain => FindByLoginName()
* as repository has to be implemented each time there is a helper:
  * the following interfaces are provided as in memory and pg implementation
  * extend and overwrite them to fit them to your domain

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




As simple repositories share a repeating set of methods, 
Arrower offers commonly used methods ready out of the box.
In general, it is good practise to keep your own repository methods to a minimum.
Arrower offers a lot for your convenience,
**not** as a recommendation to use all of them at all times!


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="entity" label="Entity Repository" default>
```go title="inmemory.repository.go"
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
```go title="inmemory.tenant.repository.go"
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

