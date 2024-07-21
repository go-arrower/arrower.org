---
sidebar_position: 2
---

# Auth

All things related to authentication.

## Getting Started
Arrower Auth provides a email + password authentication.

:::note
In the future more options and pluggable backends are possible.
:::


## Accessing The User From A Web Request

```go

// Retrieve the currently authenticated user's ID.
userID := auth.CurrentUserID(ctx)

// Check if a user is logged in.
isLoggedIn := auth.IsLoggedIn(ctx)

// Check if a user has superuser privileges.
isSuperuser := auth.IsSuperuser(ctx)

```


## Protecting Routes
Arrower has a set of middlewares that regulate access to a given route.

All routes of the Admin Context are already protected. 

```go

// Protect an individual route.
router.GET("/your/protected/url", nil, auth.EnsureUserIsLoggedInMiddleware)

// Protect all routes.
adminRouter.Use(auth.EnsureUserIsSuperuserMiddleware)

```


## Settings
tbd


## Manually Authenticating Users
tbd


## Events
The Auth Context is emiting the following events

:::note
TODO
:::


## Administrate Users
If the Admin Context is sued you can

* List and manage all Users
* Login as a User, for service and helpdesk purposes
* Change Auth settings

:::note
Add screenshots
:::