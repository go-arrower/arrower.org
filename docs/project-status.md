---
sidebar_position: 9
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
| Config                    | [Beta](/docs/basics/configuration)           |
| Logging                   | [Beta](/docs/basics/observability/logging)   |
| Testing helpers           | [Beta](/docs/basics/testing)                 |
| Repository pattern        | [Beta](/docs/basics/database/repository)     |
| Jobs                      | [Beta](/docs/basics/jobs)                    |
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
| Auth          | [Alpha](/docs/context/auth)                |
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
| E2E testing               | Not Started    |
| Frontend pipeline         | Not Started    |
| Events                    | Not Started    |
| Emails                    | Conceptual     |
| Storage                   | Not Started    |
| i18n                      | Not Started    |
| Long running processes    | Not Started    |
