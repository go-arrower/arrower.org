---
sidebar_position: 3
---

# Command Line

```bash
$ go install github.com/go-arrower/arrower/...
```

```bash
$ arrower version
```

```bash
$ arrower --help
A toolkit to get you started with your next modular monolith.
Complete documentation is available at http://arrower.org

Usage:
  arrower
  arrower [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  generate    Code generation to safe you from dealing with boilerplate
  help        Help about any command
  run         run and hot reload the application
  version     Print the version number of Arrower

Flags:
  -h, --help   help for arrower

Use "arrower [command] --help" for more information about a command.

```

## `run`
With `arrower run` you start the application and monitor for changes.

The application runs on [http://localhost:8080/](http://localhost:8080/),
when go files are changes the app shuts down and restarts it again.
Changes in other assets like js or css files will result in a hot reload
in the browser.


## `generate`
With `arrower generate` it is possible to create boilerplate for many things.

```bash
$ arrower generate
Code generation to safe you from dealing with boilerplate

Usage:
  arrower generate
  arrower generate [command]

Aliases:
  generate, gen

Available Commands:
  command
  job
  query
  request

Flags:
  -h, --help   help for generate

Use "arrower generate [command] --help" for more information about a command.

```