---
---




# Testing
## Testing Backed in From the Get-Go
<ul>
    <li>✅ Unit - all packages come with unit testing abilities</li>
    <li>⏳ Integration - helpers to make your integration tests easier</li>
    <li>💤 E2E</li>
    <li>💤 UI</li>
    <li>Manual - always left to you</li>
</ul>

## Convention
All packages provide helpers to make testing easy
* Constructors for regular logic start with `New`
* Constructors for tests start with `Test`. 
  Returning objects that assist your code in being tested well.


### Semantic Assertions
Many packages come with specialised test helpers and assertions.
These can be used in combination with the assertions from 
[stretchr/testify](https://github.com/stretchr/testify) 
and the Go standard library.

| [Repository](/docs/basics/database/repository#testing) | [Queue](/docs/basics/jobs#testing) | [Logger](/docs/basics/observability/logging#testing) | Renderer | Database |
|--------------------------------------------------------|------------------------------------|------------------------------------------------------|----------|----------|
| Empty ✅                                                | Empty ✅                            | Empty ✅                                              |          |          |
| NotEmpty ✅                                             | NotEmpty ✅                         | NotEmpty ✅                                           |          |          |
| Total ✅                                                | Total ✅                            | Total ✅                                              |          |          |
| Contains                                               | Contains ✅                         | Contains ✅                                           |          |          |
| NotContains                                            | NotContains ✅                      | NotContains ✅                                        |          |          |
|                                                        |                                    |                                                      |          |          |
| HasEntity (?)                                          | HasJob (?)                         | HasLine (?)                                          |          |          |
| HasNotEntity (?)                                       | HasNotJob (?)                      | NasNotLine (?)                                       |          |          |
|                                                        | Jobs ✅                             | Lines ✅                                              |          |          | 
|                                                        | GetFirst ✅                         | String ✅                                             |          |          |
|                                                        | Get ✅                              |                                                      |          |          |          |
|                                                        | GetFirstOf✅                        |                                                      |          | 
|                                                        | GetOf ✅                            |                                                      |          |          |
|                                                        | Reset (?)                          |                                                      |          |          |
|                                                        |                                    |                                                      |          |          |




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

The `PrepareDatabase` method is similar to `NewTestDatabase` but does not create a new database
but cleans the existing database! 
- All data is truncated
- It cannot be used in parallel

If you depend on other services for your testing use the `tests.StartDockerContainer` helper to start any service 
inside a docker container.
Check out the `tests.GetPostgresDockerForIntegrationTestingInstance` to see it in action for the testing against a postgres
database as shown above.


### Docker Images for Integration Testing
Arrower ships all images you would need to operate and test a setup. 
See [Alternatives](./jobs/alternatives#postgres-image-with-pg_cron) on how to use the postgres image with a 
preinstalled `pg_cron` extension already