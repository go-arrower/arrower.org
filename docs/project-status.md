---
sidebar_position: 90
---

# Project Status

Arrower is under active development. This page tracks the maturity of each feature.

| Phase          | Meaning                                                  |
|----------------|----------------------------------------------------------|
| **Beta**       | Used in production. May still change. Well-tested.       |
| **Alpha**      | Basic functionality works. Expect breaking changes.      |
| **Experimenting** | Early exploration. API not settled. Things may not work. |
| **Conceptual** | Idea exists, no code yet.                                |
| **Not Started**| Planned but no work done.                                |

## Core

| Part                      | Phase          |
|---------------------------|----------------|
| Config                    | [Beta](/docs/configuration-operations/configuration)           |
| Logging                   | [Beta](/docs/configuration-operations/observability/logging)   |
| Testing helpers           | [Beta](/docs/testing)                 |
| Repository pattern        | [Beta](/docs/database/repository)     |
| Jobs                      | [Beta](/docs/background-processing)                    |
| E2E testing               | [Beta](/docs/testing/e2e)        |
| Database & migrations     | Experimenting                          |

## Infrastructure

| Part                      | Phase          |
|---------------------------|----------------|
| Observability (metrics)   | Experimenting                          |
| Observability (traces)    | Experimenting                          |
| Routing                   | Experimenting                          |
| Web views                 | Experimenting                          |
| App Middleware             | Experimenting                          |
| Settings                  | Experimenting                          |

## Contexts

| Context       | Phase          |
|---------------|----------------|
| Auth          | [Alpha](/docs/architecture/auth)                |
| Admin         | Alpha                |

## CLI

| Part                      | Phase          |
|---------------------------|----------------|
| `arrower init`            | [Alpha](/docs/cli)   |
| `arrower run` (hot reload)| Experimenting  |
| `arrower generate`        | Experimenting  |
| Upgrade management        | Not Started    |

## Not Yet Started

| Part                      | Phase          |
|---------------------------|----------------|
| Startup & Lifecycle       | Not Started    |
| Prod & Dev modes          | Not Started    |
| App CLI commands          | Not Started    |
| Frontend pipeline         | Not Started    |
| Events                    | Not Started    |
| Emails                    | Conceptual     |
| Storage                   | Not Started    |
| i18n                      | Not Started    |
| Long running processes    | Not Started    |
