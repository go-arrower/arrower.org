---
---

# Routing

Arrower uses [Echo](https://echo.labstack.com/docs) for routing. 
No custom abstraction, so the full Echo API is available.
This page covers Arrower-specific conventions and patterns.
For everything else, refer to the [Echo documentation](https://echo.labstack.com/docs).


## Route Groups

The DI container provides three preconfigured routers:

| Router | Description | Usage |
|--------|-------------|-------|
| `WebRouter` | Public-facing web routes | `GET /login`, `POST /register` |
| `AdminRouter` | Admin dashboard routes, protected by default | `GET /admin/users` |
| `APIRouter` | REST API routes | `GET /api/v1/...` |

```go
func (c *MyContext) registerWebRoutes(router *echo.Group) {
    router.GET("/hello", c.controller.SayHello())
}
```


## Controller Naming Convention

Arrower follows a consistent naming pattern across all contexts:

| Action | HTTP Method | Path | Controller Method |
|--------|-------------|------|-------------------|
| Index | GET | `/users` | `Index()` |
| Show | GET | `/users/:id` | `Show()` |
| Create | GET | `/users/create` | `Create()` |
| Store | POST | `/users` | `Store()` |
| Edit | GET | `/users/:id/edit` | `Edit()` |
| Update | PUT/PATCH | `/users/:id` | `Update()` |
| Delete | DELETE | `/users/:id` | `Delete()` |

Each controller method returns `func(c echo.Context) error`:

```go
func (ctrl *UserController) Show() func(c echo.Context) error {
    return func(c echo.Context) error {
        id := c.Param("id")
        // ...
        return c.Render(http.StatusOK, "users.show", data)
    }
}
```


## Named Routes

Give routes a name to resolve URLs dynamically in templates:

```go
router.GET("/login", c.userController.Login()).Name = "auth.login"
router.GET("/users/:userID", c.userController.Show()).Name = "admin.users.show"
```

Named routes work with the `route` template helper in your HTML views.
No need to hardcode URLs - 
change the route path in one place and all links update automatically:

```html
<a href="{{ route "auth.login" }}">Login</a>
<a href="{{ route "admin.users.show" userID }}">View User</a>
```


## Binding & Validation

Arrower uses Echo's built-in [binding](https://echo.labstack.com/docs/binding) and [validation](https://echo.labstack.com/docs/validation) with `go-playground/validator`:

```go
func (ctrl *UserController) Store() func(c echo.Context) error {
    type createUserRequest struct {
        Email           string `form:"email" validate:"required,email"`
        Password        string `form:"password" validate:"required,min=8"`
        PasswordConfirm string `form:"password_confirm" validate:"required,eqfield=Password"`
    }

    return func(c echo.Context) error {
        var req createUserRequest

        if err := c.Bind(&req); err != nil {
            return echo.NewHTTPError(http.StatusBadRequest, "could not parse request").WithInternal(err)
        }

        if err := c.Validate(&req); err != nil {
            return echo.NewHTTPError(http.StatusBadRequest, "invalid input").WithInternal(err)
        }

        // process req...
    }
}
```


## Protected Routes

Auth middleware is provided for route-level access control:

```go
// Protect a single route
router.GET("/profile", c.userController.Profile(), auth.EnsureUserIsLoggedInMiddleware)

// Protect all routes in a group
adminRouter.Use(auth.EnsureUserIsSuperuserMiddleware)
```

See [Auth](/docs/context/auth) for all available middleware.


## Admin Routes

The `AdminRouter` is a route group mounted at `/admin`, created by the DI container.
Each context contributes its own admin sub-routes without knowing about other contexts.
The admin dashboard ties them together with a shared sidebar navigation.

```go
// DI container creates the admin group
dc.AdminRouter = dc.WebRouter.Group("/admin")

// Each context registers its own sub-group
adminRouter := di.AdminRouter.Group("/auth")    // → /admin/auth/*
adminRouter := di.AdminRouter.Group("/jobs")    // → /admin/jobs/*
```

Contexts register admin routes during initialisation:

```go
func (c *AuthContext) registerAdminRoutes(router *echo.Group) {
    router.GET("/users", c.userController.List()).Name = "admin.users"
    router.GET("/users/new", c.userController.New())
    router.POST("/users/new", c.userController.Store())
    router.GET("/settings", c.settingsController.List()).Name = "admin.users.settings"
}
```

The whole `/admin` group is protected with the superuser middleware (see [Protected Routes](#protected-routes)).
Route names use the `admin.*` prefix so they can be resolved in the shared admin layout:

```html
<a href="{{ route "admin.users" }}">Users</a>
<a href="{{ route "admin.jobs" }}">Job Queues</a>
```

The admin dashboard uses a shared admin layout with sidebar navigation.
Contexts only provide the page content - it is inserted into the existing layout automatically.
Developers do not control the surrounding layout, only the page template.
See [Views - Template Hierarchy](/docs/basics/views#template-hierarchy) for details on how layouts work.


## Rendering

Controllers render templates using Echo's `Render` method (see [Views](/docs/basics/views#rendering) for all rendering options):

```go
return c.Render(http.StatusOK, "jobs.index", echo.Map{
    "jobs": jobs,
})
```

Template names follow the `context.action` pattern (e.g. `auth.login`, `jobs.index`, `admin.users`).
See [Views](/docs/basics/views) for details on templates and the renderer.
