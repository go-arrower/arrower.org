---
authors: arrower
tags: [Arrower, Go, Web Development]

title: "Go's Roadmap is Neglecting Web Development"
keywords: ["Arrower", "Go", "Golang", "Web Development", "GopherCon Europe", "Roadmap", "Framework"]
description: "Go is fine-tuned for the development of CLI, cloud, and network services. The focus on stability, security, performance, and developer tool support makes it a great language. Because it is so great, I want to build websites in Go as well."
image: "./2024-06-27-go-roadmap-neglecting-web-development-market.jpg"
slug: "go-roadmap-neglecting-web-development"
#last_update: "2024-07-24"
---


# Go's Roadmap is Neglecting Web Development

Go is fine-tuned for the development of CLI, cloud, and network services.
The focus on stability, security, performance, and developer tool
support makes it a great language.
Because it is so great, I want to build websites in Go as well.


<!-- truncate -->


## Go is Not Optimised for Web Development
When Go was released, it was a refreshing head start on a new web project. 
Testing is built into the language, it supports JSON marshalling out of the box, 
it felt more like PHP than Java and I had many more amazing moments learning Go. 
Over the years, users' expectations of web apps have increased. 
And in many ways, Go is not built or optimized for web development.

This is a problem for solo developers and small teams. 
They need to build and ship things, but still want the speed, type safety, 
and tooling of the language. 
After all, Go feels a lot like other scripting languages used for 
web development, but without the hassle. 
So, why should it be hard to develop websites with it?

At the GopherCon in Berlin, Google outlined its view on Go:
The company plotted languages and popular use cases against their 
adoption curves. 
<img src={ require('./2024-06-27-go-roadmap-neglecting-web-development-market.jpg').default } 
     title="The business of Go by Cameron Balahan" 
     style = {{ display:'block', margin:'auto' }} />
\
Going forward, Google aims to compete in the cloud and GenAI markets.
Its goal? To increase Go's market share.\
In conversations, the Go team made it clear to me 
that they don't want to focus on web development.
A segment of the market long lost to Django.

Winning market share is a mindset that thinks in terms of competition
with means: winners and losers. \
<a href="https://killedbygoogle.com/" title="Google Graveyard">Want to venture a guess</a>
what happens to a project when Google has lost the market 
or shifts their headquarters' ORKs?

<img src={ require('./2024-06-27-go-roadmap-neglecting-web-development-top-gun.gif').default } 
     title="Competition leads to second places and losers" 
     style = {{ display:'block', margin:'auto' }} />
\
Now, _competition_ happens on the next hot trend.\
Bye bye web development 👋 
<span style={{ color: '#999'}}>and bye bye AI market 👋</span>

Google and other large companies focus on cloud services.
They don't care enough about web development to make 
a real impact on the language or ecosystem.
So, the question is, is there a subset of the community that cares?

## Arrower for Web Development in Go
Large companies create microservices.
This work demands teams and budgets larger 
than those of typical small projects.
Not caring about resources and addressing problems of scale is not aiding 
solo developers and small teams building web applications. 
Arrower is an effort to address this:

First, by a building mindset!
This is more constructive compared to a competitive head-to-head 
of gaining market share. 
Building allows a long term perspective on web development,
and it brings lasting motivation and innovation.

Second, Arrower challenges some of the long-held conventions 
of the Go community to simplify web development by being:
* a framework that brings common building blocks together in a 
  cohesive manner but avoids known framework traps.
* quick and productive for (MVP) development in Go, 
  matching up to Django and Rails.
* focused on domain supporting abstractions and rethinking long-held biases, 
  e.g. against reflection.

\
Arrower brings modern web development trends and developer productivity to Go. 
This includes innovations like hot reload long adopted by other languages, 
while it avoids known traps. 
There's a reason after all why Go developers don't like frameworks 😉

<a href="https://github.com/go-arrower/arrower" title="Arrower on GitHub">Check out Arrower</a>
and join the effort to make web development in Go more feasible and fun.
