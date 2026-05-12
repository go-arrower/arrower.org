---
sidebar_position: 2
---

# Getting Started

Arrower is under active development. 
The core packages **logging, jobs, repository, config, testing** 
are in Beta and well-tested. Some features are still experimental. 
See the [project status](/docs/project-status) for details.

## Prerequisites

- Go 1.23+
- Docker (for Postgres and observability stack)
- Node.js (for frontend assets)

## Install the CLI

```bash
go install github.com/go-arrower/arrower/...@latest
```

Verify the installation:

```bash
arrower version
```

## Create Your App

The CLI scaffolds a complete project: 
config, Postgres migrations, views, Docker Compose with observability, 
CI workflows, and more.

```bash
mkdir myapp && cd myapp
arrower init Myapp github.com/yourname/myapp
```

This creates:

```
myapp/
├── .config/           # Config files, hooks, linters
├── cmd/               # CLI commands
├── shared/
│   ├── domain/        # Your domain entities
│   ├── application/   # Your use cases
│   ├── interfaces/    # Controllers, repositories
│   ├── views/         # HTML templates
│   └── infrastructure/# Config, postgres, migrations
├── devops/            # Docker Compose, Grafana, Prometheus, Tempo
├── public/            # Static assets
├── tests/             # E2E tests (Cypress)
├── main.go
├── Makefile
└── go.mod
```

## Run It

```bash
make dev-tools   # install migrate CLI, linters, dev dependencies
arrower run
```

Your app is running at [http://localhost:8080](http://localhost:8080).

Behind the scenes `arrower run` starts Docker containers 
(Postgres, Grafana, Loki, Prometheus, Tempo) 
and launches your app with hot reload. 
Edit a `.go` file - the app restarts.
Edit CSS or JS - the browser reloads.

## What You Got

Out of the box your app comes with:

- **Config** - configuration using Viper, with sane defaults, file-based and environment-based values
- **Postgres** - connection pool, migrations ready to run
- **Logging** - structured logging with `slog`, JSON in production, dev-friendly output locally
- **Observability** - Grafana, Loki, Prometheus, Tempo pre-configured in Docker Compose
- **Admin dashboard** - job queues and application management at `/admin`
- **Hot reload** - backend restarts on Go changes, frontend reloads on asset changes
- **CI** - GitHub Actions workflow included (if using github.com import path)

## Where to Go Next

Explore the features you'll use in every project:

- [Jobs](/docs/basics/jobs) - background processing with transactional enqueuing, scheduling, and retries
- [Repository](/docs/basics/database/repository) - generic repository pattern with in-memory and Postgres implementations
- [Logging](/docs/basics/observability/logging) - structured logging with runtime configuration
- [Testing](/docs/basics/testing) - integration test helpers and semantic assertions
- [Config](/docs/basics/configuration) - extend Arrower's config for your application
