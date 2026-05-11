---
sidebar_position: 3
---

# Command Line

## Install

```bash
go install github.com/go-arrower/arrower/...@latest
```

Verify:

```bash
$ arrower version
```


## `init`

Scaffold a complete Arrower project with everything needed to start building.

```bash
arrower init <projectName> <importPath>
```

**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `projectName` | Name of the project (Title-cased) | `Myapp` |
| `importPath` | Go module import path | `github.com/yourname/myapp` |

**Example:**

```bash
mkdir myapp && cd myapp
arrower init Myapp github.com/yourname/myapp
```

**What gets created:**

```
myapp/
├── .config/                    # Config files, git hooks, linters
│   ├── githooks/               # commit-msg, pre-commit hooks
│   ├── tailwind.config.js
│   ├── golangci.yaml
│   ├── project.config.yaml     # App config (test + default)
│   └── 001_start-containers.hook.go
├── cmd/                        # Application CLI commands
├── shared/
│   ├── domain/                 # Domain entities
│   ├── application/            # Use cases
│   ├── interfaces/             # Controllers, repositories
│   │   └── web/                # Web controllers
│   ├── views/                  # HTML templates + base layout
│   ├── infrastructure/
│   │   ├── config/             # Config loading
│   │   └── postgres/           # Database migrations
│   ├── logging/                # Log attribute definitions
│   └── init/                   # App initialisation + routes
├── devops/                     # Docker Compose + configs
│   ├── grafana/                # Grafana datasource config
│   ├── pgadmin/                # pgAdmin config
│   ├── prometheus/             # Prometheus config
│   ├── tempo/                  # Tempo config
│   └── docker-compose.yaml
├── public/                     # Static assets (icons, CSS, JS)
├── tests/
│   └── e2e/                    # Cypress E2E test setup
├── main.go
├── Makefile
├── package.json
└── go.mod
```

After scaffolding, `arrower init` automatically runs:
- `go mod tidy` + `go mod download`
- `npm install --package-lock-only`
- `make dev-tools`
- `make generate`
- `git init`

Then commit and run:

```bash
git commit -m "chore: initial Arrower application"
arrower run
```

:::note
The `init` command is experimental. The generated project structure may change.
:::


## `run`

Start the application with hot reload.

```bash
arrower run
```

**Behaviour:**

| File type | On change |
|-----------|-----------|
| `.go` | App shuts down and restarts |
| `.css`, `.js`, `.html` | Browser reloads automatically |

The application runs on [http://localhost:8080](http://localhost:8080).
Hot reload server runs on port `3030`.

Hooks in `.config/` are loaded on startup and participate in the lifecycle:
- `OnConfigLoaded`: modify config before the app starts
- `OnStart`: run before the first build
- `OnChanged`: run on every file change
- `OnShutdown`: run on graceful shutdown

See [Hooks](/docs/advanced/hooks) for details.


## `generate`

Generate boilerplate code for use cases and jobs.

```bash
arrower generate <type> <name>
arrower generate <type> <contextName> <name>
```

**Aliases:** `gen`

**Types:**

| Type      | Alias | Description |
|-----------|-------|-------------|
| `request` | `req` | Generate a Request Use Case (input + output) |
| `command` | `cmd` | Generate a Command Use Case (input only) |
| `query`   | | Generate a Query Use Case (input + output, no side effects) |
| `job`     | | Generate a Job handler |
| `usecase` | `uc` | Auto-detect type from the name suffix |

**Examples:**

```bash
# Generate a specific Use Case type
arrower generate request helloWorld
arrower generate command createOrder
arrower generate query listUsers
arrower generate job sendEmail

# Auto-detect type from suffix
arrower generate uc helloWorldRequest    # → request
arrower generate uc createOrderCommand   # → command
arrower generate uc listUsersQuery       # → query
arrower generate uc sendEmailJob         # → job

# Generate for a specific context
arrower generate request <contextName> helloWorld
```

Each command creates two files in the `application/` directory:
- `<name>.usecase.go`: handler with request/response types
- `<name>.usecase_test.go`: test with success case

See [Use Cases - Code Generation](/docs/basics/usecases#code-generation) for the generated output.


## `version`

Print the Arrower version.

```bash
$ arrower version
```


## `completion`

Generate shell autocompletion scripts.

```bash
arrower completion [bash|zsh|fish|powershell]
```


## `help`

Show help for any command.

```bash
arrower help
arrower run --help
arrower generate --help
```
