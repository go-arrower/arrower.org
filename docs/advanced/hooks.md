---
description: Customize the behaviour of `arrower run`
---




# Hooks

Different projects have different needs and as the developer 
you might want to configure `arrower run` according to your application's situation.

Hooks are a way to customise and extend the behaviour of `arrower run`,
by registering different functions at specific points in the livecycle
of the command.

As an example let's look at the devops situation: 
Arrower is shipping with docker-compose as the default mechanism.
But what if your project does not rely on docker-compose but on Minikube instead?
Not a problem with hooks, you can just change this to your specific setup.

Similarly, you can do many other things with hooks as well, like changing
the configuration values of the run command or customizing the frontend 
stack to your specific needs.


## Hooks
The following hooks in the livecycle of the `arrower run` command can be
registered and used extend the behaviour of the cli.

| Hook                              | Description                                                                                    |
|-----------------------------------|------------------------------------------------------------------------------------------------|
| OnConfigLoaded(c&#160;*RunConfig) | Arrower has loaded it's default configuration                                                  |
| OnStart                           | `arrower run` has started . It is watching for changes on the file system and rebuilds the app |
| OnChanged(file&#160;string)       | A specific file has changed                                                                    |
| OnShutdown                        | `arrower run` is shutting down                                                                 |


## Conventions
The following conventions are important to understand, 
to be able to develop your own hooks.

* Hooks can customize the behaviour of `arrower run` in a flexible but still limited manner
* Each hook is a file saved in the `.config` folder of the project.
* All files matching the `*.hook.go` pattern are recognised as a hook
* The loading of the hooks only happens ones at the startup of the cli command
* Hooks are sorted by filename, so you can control the execution order
* All methods block
* Only imports from the standard library are possible
  * You might view this as a limitation, but the hooks are intended to be small scripts or even just calling out the OS via `os.Exec` and do not perform any elaborate calculations
* The package of the hooks should be `main`
* There is no configuration file for the arrower cli command, use the hooks to overwrite settings


# Example Hook
This example shows the basics of how a hook looks like.

```go title=".config/001_my-config.hook.go"
package main

import . "github.com/go-arrower/arrower/arrower/hooks"

func init() {
    Register(Hook{
        Name: "my hook name",
        OnConfigLoaded: func(c *RunConfig) {
            c.Port = 6060
        },
    })
}
```
