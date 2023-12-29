---
sidebar_position: 1
title: Why Arrower?
---



<div style={{textAlign: 'center'}}>
    <i>A complete framework to develop Go web applications.</i>
</div>




# Motivation
This is an opinionated approach. Make sure that your goals and architectural drivers align with the 
ones chosen by Arrower. Otherwise, we might not be a fit at all...

Developing websites and web applications for decades, it both became easier and more difficult
to create and run a web app at the same time. 
On the one end, tools like WordPress just replaced my previous work completely, while applications are still 
challenging to build, as the requirements and expectations have increased significantly.

Other communities like Rails, and Django have recognised this.
The Go community always took a stance against frameworks (often justified). 
However, working on small to mid-sized projects, I regularly get bogged down in technical boilerplate 
handwriting parts of what is basically a project specific framework in the end, 
instead of focussing on the users and the functions.

* **Every project needs boilerplate** like linters, makefile, local automation, db migrations
* **Routine web stuff has to be puzzled together** like www router, view loading, template handling, etc.
* **Massive time investments into repeating concerns**. Manual configuration setup, being busy with tech instead of features: different loggers over time.
* **A Go framework needs to fit the the language** Working with active record and frameworks like buffalo or beego just are not attractive and when used had quality issues
* **Developer experience from other languages are not available in Go** Code life reloading: backend and frontend
* **Time of npm is ending** Don't like JS & npm in the stack
* **Ops and Maintenance requirements have pilled up** increased expectations on dev-ops & observability (when self-hosting & managing)

Not each project has the same needs and is confronted with all these problems. 
If they sound familiar to you, though, you might like Arrower.




## Principles
* **Focus on the application.** 
    Keep your users and the goals of the application in your focus. 
    Instead of repeating technical concerns.
    For this Arrower already comes with batteries included for things like Operations (observability) and support
    (admin dashboard).
    Increasing the time you sent on business logic vs. infrastructural concerns.  
* **Developer comfort without fighting the framework.**
    Write more "clean" and "maintainable" code.
    Utilise helpers for common tasks.
* **Full stack, from ops to frontend.**
    The goal is to enable small teams to do a lot.
    Reduce the reliance on npm and JS but only to stay productive
    and not mess with technical concerns where they would not be required and can be done via hypermedia.
    In no way will prevent this you, and if you need more interactivity you can include your favorite frontend framework like Angular,
    react, vue, or others.
* **From single file to multiple teams.** 
    Grow your codebase as the needs require it.
    Start simple side projects, prototype rapidly, or engineer a solid SaaS application with your colleagues.
    Focus on your domain.
* **Simple where possible.**
    Software is all about tradeofs,
    Arrower chooses operation simplicity (monolith)
    and simple development concepts (hypermedia) over current trend of the decade. 
    If you want enterprise or microservices, you might be wrong.
    But in no way does Arrower intend to prevent you from doing so anyway.
* **Encourage proven experience.** 
    The Go community has always kept a high bar and prevent many bas habits to take root, e.g. 
    insisting that a logger is a dependency and must not be part of a `ctx`.
    Arrower encourages a compilation of best practices and experience that will help to write "good"
    software.

The goal is to keep up with innovation where the standard library does not, without patronising you.
Be aware of your goals and architectural drivers, so you can design the think that solves the problem you actually have.




## Contributing?
At this point, Arrower is still experimental and does not accept code contributions.
It will accept contributions later on.
And licencing will be looked at.

**Feedback on the concepts, goals, and abstractions is very welcome!**
