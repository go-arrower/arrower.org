---
sidebar_position: 2
---




# Testing
### Testing Pyramid
It's important to understand that this is just one view.
You might find parts of it useful but also have your own experience, fondness, and approach to testing. 
That is fine!
Arrower wants to support, so you can do as you like.

The style, completeness, and amount of test cases might also depend on
which phase your project is in at any given point, 
while prototyping you will want to employ a different testing strategy than when you're maintaining an application.




export const Pyramid = () => (
<div>
    <img src={require('./pyramid.png').default}
         alt="schema of testing pyramid"
         style={{
            width: '60%',
            float: 'right',
    }} />
    <span>
        Arrower is using the following terminology,
        and the picture at the right is only a sketch of the dynamics of the testing pyramid. 
        <br/>
        <br/>
        <ul>
            <li>Manual</li>
            <li>💤 UI</li>
            <li>💤 E2E</li>
            <li>⏳ Integration</li>
            <li>✅ Unit</li>
        </ul>
    </span>
    <div style={{clear:'both'}}></div>
</div>
);

<Pyramid></Pyramid>




## Unit Testing
Unit tests come in many forms. Arrower provides you with a set of helpers that make your life easier.

If you're using the repository pattern it is cumbersome to always implement an in memory copy of the repository.
Use `repo := tests.NewMemoryRepository[Entity, EntityID]()` to generate a repository that comes with a lot of
often used methods out of the box.

It is implicitly assumed that the entity has a field named `ID` that will be used as primary key.
Additionally, the ID has to have an underlying type of string and can not be an int.  

```go
type Repository[E any, ID ~string] interface {
	NextID(context.Context) ID

	Create(context.Context, E) error
	Read(context.Context, ID) (E, error)
	Update(context.Context, E) error
	Delete(context.Context, E) error

	All(context.Context) ([]E, error)
	AllByIDs(context.Context, []ID) ([]E, error)
	FindAll(ctx context.Context) ([]E, error)
	FindByID(context.Context, ID) (E, error)
	FindByIDs(context.Context, []ID) ([]E, error)
	Exists(context.Context, ID) (bool, error)
	ExistsByID(context.Context, ID) (bool, error)
	ExistAll(context.Context, []ID) (bool, error)
	ExistByIDs(context.Context, []ID) (bool, error)
	Contains(context.Context, ID) (bool, error)
	ContainsID(context.Context, ID) (bool, error)
	ContainsIDs(context.Context, []ID) (bool, error)
	ContainsAll(context.Context, []ID) (bool, error)

	Count(context.Context) (int, error)
	Length(context.Context) (int, error)
	Empty(context.Context) (bool, error)
	IsEmpty(context.Context) (bool, error)

	Save(context.Context, E) error
	SaveAll(context.Context, []E) error
	UpdateAll(context.Context, []E) error
	Add(context.Context, E) error
	AddAll(context.Context, []E) error

	DeleteByID(context.Context, ID) error
	DeleteByIDs(context.Context, []ID) error
	DeleteAll(context.Context) error
}
```


### Extending the Repository
If you have methods that are not supported out of the box you can embed the repository and implement your missing methods.

```go
func NewMemoryRepository() *MemoryRepository {
	return &MemoryRepository{
		MemoryRepository: tests.NewMemoryRepository[Entity, EntityID](),
	}
}

type MemoryRepository struct {
	*tests.MemoryRepository[Entity, EntityID]
}

// your custom method
func (repo *MemoryRepository) FindByLogin(ctx context.Context, login string) (Entity, error) {
	all, _ := repo.All(ctx)

	for _, e := range all {
		if e.Login == login {
			return u, nil
		}
	}

	return Entity{}, ErrNotFound
}
```

### Overwriting a Method
You can even fine tune the behaviour of a method, if your requirements demand it.

```go
func NewMemoryRepository() *MemoryRepository {
	return &MemoryRepository{
		MemoryRepository: tests.NewMemoryRepository[Entity, EntityID](),
	}
}

type MemoryRepository struct {
	*tests.MemoryRepository[Entity, EntityID]
}

func (repo *MemoryRepository) Count(ctx context.Context) (int, error) {
	return -1, nil
}

// calling your implementation
repo := tests.NewMemoryRepository[Entity, EntityID]()
repo.Count(ctx) // result: -1
```




## Integration Testing
Sometimes you just don't want to test against an in memory implementation and need to see if your application behaves 
correctly against the real database.

This pattern spins up a postgres database inside a docker container and removes the container after the test has 
finished automatically.
The `NewTestDatabase` method will ensure you can safely run all tests in parallel by:
* Creating a new randomly named database for each test case
* Performing schema migration
* Seeding the database with test data

The testdata is seeded with the project [testfixtures](https://github.com/go-testfixtures/testfixtures)
and if an file `testdata/fixtures/_common.yaml` exists it is automatically loaded. For additional data per test case
take a look at [multiple tables in one file](https://github.com/go-testfixtures/testfixtures#-single-file-on-multiple-tables)

```go
//go:build integration

package yourpackage_test

var pgHandler *tests.PostgresDocker

func TestMain(m *testing.M) {
	pgHandler = tests.GetPostgresDockerForIntegrationTestingInstance()

	//
	// Run tests
	code := m.Run()

	pgHandler.Cleanup()
	os.Exit(code)
}

func TestSomething(t *testing.T) {
	t.Parallel()

	pg := pgHandler.NewTestDatabase()

	// use pg to initialise your test dependencies like a postgres repository 
}

func TestSomethingOther(t *testing.T) {
	t.Parallel()

	// load multiple additional test fixture files to seed the database
	pg := pgHandler.NewTestDatabase([]string{
		"testdata/fixtures/something-other-user.yaml",
		"testdata/fixtures/something-other-posts.yaml",
    })
	
	_ = pg.PGx() // direct access to the pgx connection pool 
}
```

If you depend on other services for your testing use the `tests.StartDockerContainer` helper to start any service 
inside a docker container. With `tests.GetDockerContainerInstance` only one docker container is 
created and returned each time, so that your system and CI does not get swamped with too many containers.
Check out the `tests.GetPostgresDockerForIntegrationTestingInstance` to see it in action for the testing against a postgres
database as shown above.


### Docker Images for Integration Testing
Arrower ships all images you would need to operate and test a setup.
See [Tasks](./repeating-tasks#postgres-image-with-pg_cron) on how to use the postgres image with a 
preinstalled `pg_cron` extension already