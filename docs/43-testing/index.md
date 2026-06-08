---
---
import PyramidSvg from './pyramid.svg';




# Testing
## Testing Backed in From the Get-Go

<div style={{display: 'flex', alignItems: 'flex-start', gap: '2rem'}}>
<div style={{flex: 1}}>

- **Manual**: Always in your hands. No opinions here.
- **UI**: 💤 Not planned, use Playwright or Cypress.
- **E2E**: Full end-to-end flows. [See E2E Testing](/docs/testing/e2e)
- **Integration**: Spin up any dependency in Docker: Postgres, S3, you name it. Isolated per test, fixture seeding, runs in parallel.
- **Unit**: Every package testable out of the box. Semantic assertions for Repos, Queues, Logs. No mocking required.

</div>
<div style={{flex: 1, textAlign: 'right'}}>

<PyramidSvg />

</div>
</div>


## Unit Testing
All packages follow the same convention:
* **`New*`**: production constructors
* **`Test*`**: test constructors, returning in-memory implementations with built-in assertions

```go
// Production
repo := arepo.NewPostgresRepository[User, UserID](pgx)
logger := alog.New()
queue := jobs.New(pgx)

// Test
repo := arepo.Test[User, UserID](t)
logger := alog.Test(t)
queue := jobs.Test(t)
```

Every `Test*` constructor returns an object you inject like the real thing.
Assertions follow the [stretchr/testify](https://github.com/stretchr/testify) pattern: return `bool`, accept `msgAndArgs`.
For more packages, also see [Use Cases](/docs/architecture/usecases#testing).

### Semantic Assertions
Each package provides purpose-built assertions for its domain.

| | [Repository](/docs/database/repository#testing) | [Queue](/docs/background-processing#testing) | [Logger](/docs/configuration-operations/observability/logging#testing) | Renderer |
|---|---|---|---|---|
| Empty | ✅ | ✅ | ✅ | 💤 |
| NotEmpty | ✅ | ✅ | ✅ | ✅ |
| Total | ✅ | ✅ | ✅ | 💤 |
| Contains | 💤 | ✅ | ✅ | ✅ |
| NotContains | 💤 | ✅ | ✅ | 💤 |

#### Example - Use Case with Queue
```go
func TestRegisterUserEnqueuesWelcomeEmail(t *testing.T) {
    t.Parallel()

    repo := arepo.Test[User, UserID](t)
    q := jobs.Test(t)

    handler := NewRegisterUserRequestHandler(repo, q)

    _, err := handler.H(t.Context(), RegisterUserRequest{Email: "alice@example.com"})
    assert.NoError(t, err)

    q.NotEmpty()
    q.Total(1)
    q.Contains(SendWelcomeEmailJob{Email: "alice@example.com"})

    // Queue-specific helpers: inspect jobs without consuming them
    job := q.GetFirst()
    assert.Equal(t, "alice@example.com", job.(SendWelcomeEmailJob).Email)
}
```

#### Example - Use Case with Logger
```go
func TestLoginLogsAttempt(t *testing.T) {
    t.Parallel()

    logger := alog.Test(t)

    handler := NewLoginRequestHandler(logger)

    _, err := handler.H(t.Context(), LoginRequest{Email: "alice@example.com"})
    assert.NoError(t, err)

    logger.Contains("login attempt")
    logger.Total(1)

    // Logger-specific helpers: inspect the full log output
    logger.Lines()  // []string of all log lines
    logger.String() // full output as string
}
```

#### Example - Renderer
```go
func TestRenderProfilePage(t *testing.T) {
    t.Parallel()

    r, err := renderer.Test(t, viewsFS, nil)
    require.NoError(t, err)

    var buf bytes.Buffer
    assertions, err := r.Render(&buf, "profile", "show.html", data)
    require.NoError(t, err)

    assertions.NotEmpty()
    assertions.Contains("<h1>Alice</h1>")
}
```


## Integration Testing
Test against real infrastructure, not mocks.

`tests.StartDockerContainer` spins up any service: Postgres, S3, Redis, anything Docker supports.
Containers start with retry logic and clean up after tests.

```go
cleanup, err := tests.StartDockerContainer(
    &dockertest.RunOptions{
        Repository: "minio/minio",
        Tag:        "latest",
        Env:        []string{"MINIO_ROOT_USER=test", "MINIO_ROOT_PASSWORD=testtest"},
    },
    func(resource *dockertest.Resource) func() error {
        return func() error {
            // retry connecting until the service is ready
            return nil
        }
    },
)
require.NoError(t, err)
defer cleanup()
```

**Postgres Integration**

Arrower provides a dedicated helper for Postgres with parallel-safe test databases,
automatic migrations, and fixture seeding.
See [Repository Testing](/docs/database/repository#testing).
