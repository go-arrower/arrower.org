---
---


# Views

Arrower renders HTML using Go's `html/template`.
No template engine, just the standard library 
plus [Sprig](http://masterminds.github.io/sprig/) functions.
Templates are loaded from an `fs.FS` and support hot reload during development.


## Template Hierarchy

Templates are composed in layers.
Each layer defines blocks that the next layer can override:

```
┌──────────────────────────────────────────┐
│ Base Layout (default.base.html)          │  HTML <head>, <body>, htmx, global CSS/JS
│ ┌────────────────────────────────────────│
│ │ Context Layout (default.layout.html)   │  Sidebar, nav, context chrome
│ │ ┌──────────────────────────────────────│
│ │ │ Page (pages/*.html)                  │  Page content + page-level CSS/JS
│ │ │ ┌────────────────────────────────────┤
│ │ │ │ Fragment (page.html#fragment)      │  HTMX partial, rendered standalone
│ │ │ ├────────────────────────────────────┤
│ │ │ │ Component (components/*.html)      │  Reusable, embedded in pages
│ │ │ └────────────────────────────────────│
│ │ └──────────────────────────────────────│
│ └────────────────────────────────────────│
└──────────────────────────────────────────┘
```

### Base Layout

Root HTML skeleton (`shared/views/default.base.html`).
Defines the outer document structure: 
`<!doctype html>`, `<head>`, `<body>`, htmx, global scripts and styles.
Provides empty blocks for layers to fill:

```html
{{ block "layout.css" . }}{{ end }}
{{ block "page.css" . }}{{ end }}
{{ block "layout.js" . }}{{ end }}
{{ block "page.js" . }}{{ end }}

{{ block "layout" . }}
  <main>
    {{ block "content" . }}
      Fallback content
    {{ end }}
  </main>
{{ end }}
```

### Context Layout

Context-specific chrome like sidebars and navigation 
(`default.layout.html` in each context's views).
Overrides the `layout` block and provides a new `content` block for pages.

### Page

The actual page content placed in the `content` block.
Pages can also override `page.css`, `page.js`, and title blocks.

### Fragment (HTMX)

Render only part of a page for HTMX partial updates.
Uses the `#` separator. Skips all layouts, renders just the named fragment.


## Rendering

```go
// Full page: base layout + context layout + page
c.Render(http.StatusOK, "jobs.index", echo.Map{"jobs": jobs})

// Fragment: skip layouts, render just the #fragment from the page (for [HTMX](https://htmx.org) partial updates)
c.Render(http.StatusOK, "jobs.maintenance#table-size", data)
```


## Injecting Page-Level CSS and JS

The base layout defines empty blocks in `<head>`.
Pages and context layouts override them to inject page-specific assets:

```html
<!-- pages/jobs.index.html -->
{{ define "page.js" }}
<script src="static/admin/js/chart.js"></script>
<script src="static/admin/js/behaviors/pending-jobs.js"></script>
{{ end }}

{{ define "admin.title" }}Job Queues{{ end }}

<!-- page content starts here -->
<div id="queues">
  ...
</div>
```

The same pattern works at the context layout level with 
`layout.css` and `layout.js` blocks.


## Directory Structure

```
views/
├── default.base.html          # Base layout (HTML skeleton)
├── default.layout.html        # Context layout (optional)
├── pages/
│   ├── home.html              # Full page
│   ├── jobs.index.html        # Page with fragments
│   └── login.html
└── components/
    └── header.html            # Reusable component
```

- Files in the root are layouts (parsed as `*.base.html` or `*.layout.html`)
- `pages/` contains page templates
- `components/` contains shared reusable fragments


## Presenter Pattern

Keep views dumb. 
When a page needs data transformation:
formatting dates, computing display values, pretty-printing JSON 
-> use a presenter instead of putting logic in templates.

Presenters are **optional**. 
Use them when the page needs more than a simple map or struct.
For simple pages, pass `echo.Map` or a struct directly.

```go title="views/pages/jobs.queue.go"
// BuildQueuePage transforms domain data into view-ready data.
func BuildQueuePage(queue string, jobs []jobs.Job, kpis jobs.QueueKPIs) QueuePage {
    return QueuePage{
        QueueName: queue,
        Stats:     queueKpiToStats(queue, kpis),
        Jobs:      prettyFormatPayload(jobs),
    }
}

type QueuePage struct {
    Jobs      []viewJob
    QueueName string
    Stats     QueueStats
}

type viewJob struct {
    RunAtFmt string // pre-formatted for display
    jobs.Job
}
```

Then in the controller:

```go
func (ctrl *JobsController) ShowQueue() func(c echo.Context) error {
    return func(c echo.Context) error {
        // ...fetch domain data...

        return c.Render(http.StatusOK, "jobs.queue",
            pages.BuildQueuePage(queue, domainJobs, kpis),
        )
    }
}
```


## Reusable Components

Place shared template fragments in `components/*.html`.
They are loaded automatically and available in all pages.

Components are **not** rendered standalone - unlike fragments,
they have no layout and cannot be called directly from a controller.
They are building blocks embedded in pages using Go's standard `template` call:

```html
<!-- components/header.html -->
<header>
    <h1>{{ .Title }}</h1>
</header>
```

```html
<!-- inside any page -->
{{ template "header" . }}
```


## Base Data

Provide data available in **all** pages across all contexts:

```go
renderer.AddBaseData("default", func(ctx context.Context) (map[string]any, error) {
    return map[string]any{"appName": "myapp"}, nil
})
```


## Context Views

Each context registers its own view `fs.FS` and can provide layout data that is merged into every page in that context:

```go
renderer.AddContext("auth", authViews)

renderer.AddLayoutData("auth", "default", func(ctx context.Context) (map[string]any, error) {
    return map[string]any{"user": currentUser}, nil
})
```

Layout data functions run on every render for that context, 
so all pages get the data automatically.


## Built-in Template Functions

| Function | Description |
|----------|-------------|
| All [Sprig](http://masterminds.github.io/sprig/) functions | String manipulation, date formatting, math, etc. |
| `route` | Reverse route resolution: `{{ route "auth.login" }}` |
| `t` | i18n translation placeholder |
| Custom functions | Pass any `template.FuncMap` to the renderer constructor |


## Hot Reload

In development, the Arrower middleware watches template files for changes and 
reloads the page in the browser automatically.
Edit a template, save - the browser updates without manual refresh.
