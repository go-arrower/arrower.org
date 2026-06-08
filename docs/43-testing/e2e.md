---
title: E2E Testing
sidebar_position: 2
---

import MentalModelSvg from './e2e-mental-model.svg';

# E2E Testing for Your SSR & HTMX App in Pure Go

Go has great unit testing and great HTTP handler testing. What's missing is user-level testing:
log in, fill a form, follow a redirect, check a cookie.
Go web developers either hand-roll this with `httptest` or pull in Playwright and add Node.js to their stack.

Arrower's E2E framework is a third option: test complete user journeys in pure Go,
with assertions that understand HTML forms, HTMX attributes, and SSR pages.
No browser. No Node.js. No chromedriver. Just HTTP round-trips with HTML assertions.
This gets you ~80% along the way for SSR + HTMX applications.
For the remaining cases (JavaScript-heavy interactions, visual regression), 
you can still evaluate alternatives like Playwright or Cypress.

## Architecture & Constraints

The e2e framework operates at the HTTP level, not browser level.

What this means:
- **No JavaScript execution**: HTMX `hx-on::` handlers, Alpine.js, Stimulus - none run.
- **No CSS rendering**: No visibility or layout checks.
- **No real clicks**: `Form.Submit()` POSTs directly. No click-wait-assert cycle.
- **No screenshots**: Debug via `page.DumpHTML()`.

What you gain from this trade-off:
- **Speed**: HTTP round-trip only, no browser boot. Tests run in milliseconds.
- **Determinism**: No flaky waits, no race conditions, no timing issues.
- **Simplicity**: Pure Go. Zero external dependencies beyond `go test`.

:::info When to use what
Use E2E tests for complete user journeys through your SSR pages (login flows, form submissions, redirects, cookie handling).
Use [integration tests](/docs/testing#integration-testing) for database-level assertions.
Use unit tests for business logic.
:::


## Getting Started

All e2e tests use the `e2e` build tag to keep unit test runs fast.\
Create a test suite with `e2e.Test(t)`.

```go title="login_test.go"
//go:build e2e

package web_test

func TestScenario_LoginAndLogout(t *testing.T) {
    t.Parallel()

    suite := e2e.Test(t, e2e.WithBaseURL("http://localhost:8080"))

    // suite is ready - start navigating
    page := suite.Goto("/auth/profile")
    page.IsPath("/auth/login", "should redirect unauthenticated request to login page")

    // access and submit the login form
    form := page.Form("myLoginForm")
    page = form.Submit(map[string]any{
        "login":    "user@example.com",
        "password": "secret",
    })

    // assert session was created
    page.HasCookie("session")
    page.Contains("Profile", "should be redirected to profile page")
}
```

Run with:
```bash
go test -tags=e2e ./...
```



## Navigation Model

The framework has three layers: a **Suite** manages the test session, navigating produces either an HTML **Page** or a JSON **Document**.
From a Page you drill into **Forms**, **Elements**, or **Scripts** etc.

<MentalModelSvg />

```
Suite ─── Goto() ──> Page ─── Form() ──> Form ── Submit() ──> Page
  │                   ├── Find() ──> Element
  │                   ├── TestID() ──> Element
  │                   └── Scripts() ──> Scripts
  │
  └── Get/Post() ──> Document
```

The framework models two navigation patterns matching real browser semantics:

| Method            | Cookie behavior           | Analogy                                        |
|-------------------|---------------------------|------------------------------------------------|
| `suite.Goto(url)` | Fresh session, no cookies | User opens a new browser tab                   |
| `page.Goto(url)`  | Preserves cookies         | User clicks a link inside the same browser tab |


## Page Assertions

After navigating, you assert on the response. Every `Page` carries the full HTTP response,
status, headers, cookies, body, plus parsed HTML for DOM queries.
The HTML is validated on every page load; malformed markup fails the test immediately.

```go
page.IsOK()
page.Contains("Welcome")
page.HasCookie("session")
```

Status codes have named helpers (`IsOK`, `IsNotFound`, `IsUnauthorized`) plus `StatusCode(n)` for everything else.
Cookies are checked with `HasCookie`, `HasCookies`, or `HasCookieTotal`.
Body content uses `Contains` / `NotContains`.

Redirects behave subtly: `IsRedirected` checks for any 3xx status with a `Location` header,
while `IsPath` asserts the **final** URL after the server followed the redirect.
`IsPath` is what you usually want after a login flow.

```go
page := suite.Goto("/admin/dashboard")
page.IsPath("/login")                              // server redirected us
page.HasQueryParam("returnUrl", "/admin/dashboard") // and told us where to go back
```

Headers use a fluent builder: `page.Header("HX-Trigger").Contains("showToast")`.

When a test fails, `page.DumpHTML()` returns the full markup for inspection.


## Form Testing

The form API handles discovery, field validation, HTMX attributes, and submission in one chain.
The key idea: assert the form *before* submitting - catch rendering bugs (missing fields, wrong defaults)
separate from submission bugs.

### Form Discovery

You are not limited to CSS selectors.
`page.Form(...)` finds forms in multiple different the ways:
It matches by `name`, `id`, `action`, `hx-post`, or `data-testid`. First unique match wins.

```go
form := page.Form("login")       // matches name="login" or id="login"
form := page.Form("/auth/login") // matches action="/auth/login" or hx-post="/auth/login"
```

### Asserting Fields Before Submission

```go
form := page.Form("/auth/register")
form.HasField("email")
form.HasField("password")
form.HasSubmit()
form.HasFieldValue("email", "prefilled@example.com")
form.HasNoErrors()
```

Validation errors are detected from common CSS patterns:
ARIA (`aria-invalid`), Bootstrap (`.is-invalid`), Tailwind (`.text-red-500`),
Django (`.errorlist`), and generic (`.has-error`).

### Submission

`Submit()` sends the form data and returns a new `Page`, the response.

```go
page = form.Submit(map[string]any{
    "email":    "user@example.com",
    "password": "secret123",
})
page.IsOK()
```

### HTMX Forms

When a form uses HTMX attributes, `Submit()` automatically detects the method from `hx-post`/`hx-get`/etc.,
sends the `HX-Request: true` header, merges `hx-vals`, and applies `hx-headers`.

```html
<form hx-post="/api/like" hx-vals='{"post_id": "42"}'>
    <button type="submit">Like</button>
</form>
```

```go
page = page.Form("/api/like").Submit(map[string]any{
    // "post_id": "42" is merged from hx-vals automatically
})
```


## Element Selection

Two approaches: `Find()` for CSS selectors, `TestID()` for explicit `data-testid` attributes.
Use `Find()` for quick checks, `TestID()` for anything that should survive a template refactor.

```go
page.Find(".user-name").HasText("Alice")
page.Find("nav a").Total(5)

page.TestID("submit-button").Exists()
page.TestID("user-email").HasText("alice@example.com")
```


## JSON API Testing

For API endpoints, the same framework returns a `Document` instead of a `Page`.
`Document` is to JSON what `Page` is to HTML: assertions on the response, validated before use.
Fields are accessed with dot-notation paths; array indices use numeric segments.

```go
// GET - list endpoint returns an array
doc := suite.Get("/api/users")
doc.IsOK()
doc.IsArray()
doc.Total(3)
doc.FieldEquals("0.name", "Alice")  // first element
doc.FieldEquals("1.name", "Bob")    // second element
doc.FieldLen("", 3)                 // top-level array length

// GET - single object with nested fields
doc = suite.Get("/api/users/1")
doc.IsObject()
doc.HasField("address.city")
doc.FieldEquals("name", "Alice")
doc.FieldContains("bio", "Go developer")

// POST - create and assert
doc = suite.Post("/api/users", map[string]any{
    "name":  "Bob",
    "email": "bob@example.com",
})
doc.IsCreated()
doc.FieldEquals("name", "Bob")

var user User
doc.JSON(&user)  // unmarshal into struct
```


## Script Validation

Assert which JavaScript libraries are loaded, useful to ensure no CDN scripts leak into production.

```go
page.Scripts().Total(2)           // exactly 2 script tags with src
page.Scripts().HasLibrary("htmx") // htmx loaded
page.Scripts().HasOnlyLocal()     // no CDN scripts
```

Library detection supports: unpkg, jsdelivr, skypack, cdnjs, cdn.tailwindcss.


## Custom Suites

For domain-specific helpers, embed `e2e.Suite` and add methods:

```go title="contexts/auth/tests/suite.go"
//go:build e2e

package tests

type Suite struct {
    *e2e.Suite
}

func Test(t *testing.T) *Suite {
    return &Suite{
        Suite: e2e.Test(t),
    }
}

func (s *Suite) RegisterUser(email, password string) {
    s.t.Helper()

    page := s.Goto("/auth/register").Form("/auth/register").Submit(map[string]any{
        "login":                 email,
        "password":              password,
        "password_confirmation": password,
    })
    page.NotContains("Register")
}
```

```go title="contexts/auth/tests/web/order_test.go"
func TestScenario_UserCanPlaceOrder(t *testing.T) {
    t.Parallel()

    suite := tests.Test(t)
    suite.RegisterUser("user@example.com", "secret123")

    page := suite.Goto("/orders/new")
    // ... test order placement
}
```

## Folder Organisation

```
your-project/
├── e2e/                          # shared e2e test infrastructure
│   └── suite.go                  # custom Suite with domain helpers
├── contexts/
│   └── auth/
│       └── tests/
│           ├── suite.go          # auth-specific Suite (RegisterUser, etc.)
│           └── web/
│               └── auth_test.go  # actual e2e test cases
```

## HTML Validation

Every page load validates the HTML automatically.
Malformed markup, unclosed tags, and structural issues fail the test immediately.
The validator handles HTMX-specific syntax (`hx-on::event`) by transforming it to XML-safe equivalents before parsing.


## Test Naming Convention

The framework enforces a naming convention:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `TestHelper_` | Helper function tests | `TestHelper_FormFindsByName` |
| `TestScenario_` | Multi-step user journeys | `TestScenario_LoginAndLogout` |
| `TestAssert_` | Single assertion behavior | `TestAssert_IsOKPassesOn200` |

Tests not following this convention will fail with a descriptive error message.

