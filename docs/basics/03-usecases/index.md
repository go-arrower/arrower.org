---
sidebar_position: 1
---




# Usecases

To build the application layer, Arrower offers a set of primitives:

| Primitive | Description                                    |
|-----------|------------------------------------------------|
| Request   | can produce side effects and return data       | 
| Command   | produces side effects, e.g. mutate state       | 
| Query     | does not produce side effects and returns data | 
| Job       | produces side effects                          | 


A usecase can be generated with the cli to save some boilerplate:
```bash
$ arrower generate request helloWorld
```

or in the same way to generate code for a context:
```bash
$ arrower generate request <contextName> helloWorld
```

It will generate two files in the application layer, one for the Request
and the other one with a corresponding test.
Both are ready for the actual logic to be implemented.

```go title="shared/application/hello-world.request.go"
package application

import (
    "context"

    "github.com/go-arrower/arrower/app"
)

func NewHelloWorldRequestHandler() app.Request[HelloWorldRequest, HelloWorldResponse] {
    return &helloWorldRequestHandler{}
}

type helloWorldRequestHandler struct{}

type (
    HelloWorldRequest struct{}
    HelloWorldResponse struct{}
)

func (h *helloWorldRequestHandler) H(ctx context.Context, req HelloWorldRequest) (HelloWorldResponse, error) {
    return HelloWorldResponse{}, nil
}
```

```go title="shared/application/hello-world.request_test.go"
package application_test

import (
    "context"
    "testing"
    
    "github.com/stretchr/testify/assert"
    
    "github.com/go-arrower/skeleton/shared/application"
)

func TestHelloWorldRequestHandler_H(t *testing.T) {
    t.Parallel()

    t.Run("success case", func(t *testing.T) {
        t.Parallel()
        
        handler := application.NewHelloWorldRequestHandler()
        
        res, err := handler.H(context.Background(), application.HelloWorldRequest{})
        assert.NoError(t, err)
        assert.Empty(t, res)
    })
}

```

## Instrumentalisation
The primitives have the advantage that it is easy to write middleware for them.
Arrower ships with decorators for 
* Tracing
* Metrics
* Logging
* Validation

They can be called with:
```go
handler := app.NewLoggedRequest(
    logger, 
    NewHelloWorldRequestHandler(),
)
```

To fully instrument an usecase rely on:
```go
handler := app.NewInstrumentedRequest(
    di.TraceProvider, di.MeterProvider, di.Logger,
    NewHelloWorldRequestHandler(),
),
```

## Testing
To make it easy to test any code having an usecase as a dependency (e.g. controller), 
a bunch of helpers are ready for use.

Take a look at this test and how the `app.TestRequestHandler` is used
to quickly assert on the specific input coming to the usecase or returning data:
```go
// ...

    t.Run("successful request", func(t *testing.T) {
        t.Parallel()
        
        handler := app.NewValidatedRequest(validator.New(), app.TestRequestHandler(func(ctx context.Context, _ structWithValidationTags) (response, error) {
            assert.True(t, app.PassedValidation(ctx))
            return response{}, nil
        }))
        
        res, err := handler.H(context.Background(), passingValidationValue)
        assert.NoError(t, err)
        assert.Empty(t, res)
    })

// ...
```

For many tests this level of control is not required.
There are also helpers that always succeed `app.TestSuccessRequestHandler` 
or always fail `app.TestFailureRequestHandler`:

```go
// ...

t.Run("success", func(t *testing.T) {
    t.Parallel()
    
    req := httptest.NewRequest(http.MethodGet, "/", nil)
    rec := httptest.NewRecorder()
    c := echoRouter.NewContext(req, rec)
    
    handler := web.NewHelloController(application.App{
        SayHello: app.TestSuccessRequestHandler[application.SayHelloRequest, application.SayHelloResponse](),
    })
    
    assert.NoError(t, handler.SayHello()(c))
    assert.Equal(t, http.StatusOK, rec.Code)
})

// ...
```