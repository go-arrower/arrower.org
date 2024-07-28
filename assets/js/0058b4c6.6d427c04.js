"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[4088],{6462:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Why Arrower?","href":"/docs/why","docId":"why","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started","unlisted":false},{"type":"link","label":"Command Line","href":"/docs/cli","docId":"cli","unlisted":false},{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Routing","href":"/docs/basics/routing/","docId":"basics/routing/index","unlisted":false},{"type":"link","label":"Views","href":"/docs/basics/views/","docId":"basics/views/index","unlisted":false},{"type":"category","label":"Database","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Repository","href":"/docs/basics/database/repository","docId":"basics/database/repository","unlisted":false},{"type":"link","label":"Transactions","href":"/docs/basics/database/transactions","docId":"basics/database/transactions","unlisted":false}],"href":"/docs/basics/database/"},{"type":"link","label":"Usecases","href":"/docs/basics/usecases/","docId":"basics/usecases/index","unlisted":false},{"type":"category","label":"Jobs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cron Alternatives","href":"/docs/basics/jobs/alternatives","docId":"basics/jobs/alternatives","unlisted":false},{"type":"link","label":"Web Interface","href":"/docs/basics/jobs/ui","docId":"basics/jobs/ui","unlisted":false}],"href":"/docs/basics/jobs/"},{"type":"category","label":"Observability","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Logging","href":"/docs/basics/observability/logging","docId":"basics/observability/logging","unlisted":false},{"type":"link","label":"Metrics","href":"/docs/basics/observability/metrics","docId":"basics/observability/metrics","unlisted":false},{"type":"link","label":"Traces","href":"/docs/basics/observability/traces","docId":"basics/observability/traces","unlisted":false}],"href":"/docs/basics/observability/"},{"type":"link","label":"Testing","href":"/docs/basics/testing/","docId":"basics/testing/index","unlisted":false}],"href":"/docs/basics/"},{"type":"category","label":"Contexts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Auth","href":"/docs/context/auth","docId":"context/auth","unlisted":false},{"type":"link","label":"Admin","href":"/docs/context/admin","docId":"context/admin","unlisted":false},{"type":"link","label":"Technical Details","href":"/docs/context/tech_details","docId":"context/tech_details","unlisted":false}],"href":"/docs/context/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cron","href":"/docs/guides/cron/","docId":"guides/cron/index","unlisted":false},{"type":"link","label":"Extend a Repository","href":"/docs/guides/extend-repository/","docId":"guides/extend-repository/index","unlisted":false},{"type":"link","label":"Overwrite a Repository Method","href":"/docs/guides/overwrite-repository-method/","docId":"guides/overwrite-repository-method/index","unlisted":false},{"type":"link","label":"Persist an InMemory Repository","href":"/docs/guides/persist-inmemory-repository/","docId":"guides/persist-inmemory-repository/index","unlisted":false},{"type":"link","label":"Run Jobs","href":"/docs/guides/run-jobs/","docId":"guides/run-jobs/index","unlisted":false}],"href":"/docs/guides/"}]},"docs":{"basics/database/index":{"id":"basics/database/index","title":"Database","description":"Arrower only works with Postgres and uses the pgx driver.\\\\","sidebar":"tutorialSidebar"},"basics/database/repository":{"id":"basics/database/repository","title":"Repository","description":"Recommended Approach","sidebar":"tutorialSidebar"},"basics/database/transactions":{"id":"basics/database/transactions","title":"Transactions","description":"Transactions are part of the request\'s ctx.","sidebar":"tutorialSidebar"},"basics/index":{"id":"basics/index","title":"Basics","description":"","sidebar":"tutorialSidebar"},"basics/jobs/alternatives":{"id":"basics/jobs/alternatives","title":"Cron Alternatives","description":"This document describes alternatives to the Scheduler interface.","sidebar":"tutorialSidebar"},"basics/jobs/index":{"id":"basics/jobs/index","title":"Jobs","description":"For everything that has to run in the background","sidebar":"tutorialSidebar"},"basics/jobs/ui":{"id":"basics/jobs/ui","title":"Web Interface","description":"Outline:","sidebar":"tutorialSidebar"},"basics/observability/index":{"id":"basics/observability/index","title":"Observability","description":"To properly understand what is going on inside your application,","sidebar":"tutorialSidebar"},"basics/observability/logging":{"id":"basics/observability/logging","title":"Logging","description":"Log to see what is going on in your application.","sidebar":"tutorialSidebar"},"basics/observability/metrics":{"id":"basics/observability/metrics","title":"Metrics","description":"","sidebar":"tutorialSidebar"},"basics/observability/traces":{"id":"basics/observability/traces","title":"Traces","description":"","sidebar":"tutorialSidebar"},"basics/routing/index":{"id":"basics/routing/index","title":"Routing","description":"Routing uses the well known echo router","sidebar":"tutorialSidebar"},"basics/testing/index":{"id":"basics/testing/index","title":"Testing","description":"Testing Backed into it From the Get Go","sidebar":"tutorialSidebar"},"basics/usecases/index":{"id":"basics/usecases/index","title":"Usecases","description":"To build the application layer, Arrower offers a set of primitives:","sidebar":"tutorialSidebar"},"basics/views/index":{"id":"basics/views/index","title":"Views","description":"","sidebar":"tutorialSidebar"},"cli":{"id":"cli","title":"Command Line","description":"run","sidebar":"tutorialSidebar"},"context/admin":{"id":"context/admin","title":"Admin","description":"A powerful out-of-the-box admin dashboard.","sidebar":"tutorialSidebar"},"context/auth":{"id":"context/auth","title":"Auth","description":"All things related to authentication.","sidebar":"tutorialSidebar"},"context/index":{"id":"context/index","title":"Contexts","description":"Arrower provides a set of Contexts, that help you to get started quickly with commonly required functionality.","sidebar":"tutorialSidebar"},"context/tech_details":{"id":"context/tech_details","title":"Technical Details","description":"A short overview of how Contexts work.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"You should not get started with Arrower, just yet.","sidebar":"tutorialSidebar"},"guides/cron/index":{"id":"guides/cron/index","title":"Cron","description":"Schedule a repeating job","sidebar":"tutorialSidebar"},"guides/extend-repository/index":{"id":"guides/extend-repository/index","title":"Extend a Repository","description":"To add methods to a repository that are not supported out of the box,","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Guides","description":"","sidebar":"tutorialSidebar"},"guides/overwrite-repository-method/index":{"id":"guides/overwrite-repository-method/index","title":"Overwrite a Repository Method","description":"To change and fine tune the behaviour of an existing method overwrite it.","sidebar":"tutorialSidebar"},"guides/persist-inmemory-repository/index":{"id":"guides/persist-inmemory-repository/index","title":"Persist an InMemory Repository","description":"This is only recommended while prototyping","sidebar":"tutorialSidebar"},"guides/run-jobs/index":{"id":"guides/run-jobs/index","title":"Run Jobs","description":"Enqueue a single job","sidebar":"tutorialSidebar"},"why":{"id":"why","title":"Why Arrower?","description":"A complete framework to develop Go web applications.","sidebar":"tutorialSidebar"}}}}')}}]);