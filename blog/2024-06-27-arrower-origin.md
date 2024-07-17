---
authors: arrower
tags: [Arrower, Go, Web Development]

#keywords: []
#description:
#image:
#slug:
#last_update: 

draft: true
---


# Go's Roadmap is Neglecting Web Development

Go is fine-tuned for the development of CLI, cloud, and network services.
The focus on stability, security, performance, and developer tool support makes it a great language.
Because it is so great, I want to build websites in Go as well.


<!-- truncate -->


## Go is Not Optimised for Web Development
When Go was released, it was a refreshing head start on a new web project. 
Testing is build into the language, it supports JSON marshalling out of the box, 
it felt more like PHP than Java and I had many more amazing moments. 
Over the years, users' expectations of web apps have increased. 
And in many ways, Go is not built or optimized for web development.

This is a problem for solo developers and small teams. 
They need to build and ship things, but still want the speed, type safety, and tooling of the language. 
After all, Go feels a lot like other scripting languages used for web development, but without the hassle. 
So, why should it be hard to develop websites with it?

At the GopherCon in Berlin, Google outlined its view on Go:
The company compared languages and popular use cases with their adoption rates. 
<img src={ require('./2024-06-27-arrower-origin-market.jpg').default } title="The business of Go by Cameron Balahan"
style = {{ display:'block', margin:'auto' }}/>
\
Going forward, Google aims to compete in the cloud and GenAI markets.
Its goal? To increase Go's market share.\
In conversations the Go team made it clear to me that they don't want to focus on web development.
A segment of the market long lost to Django.

Winning market share is a mindset that thinks in terms of competition with means: winners and losers.
<a href="https://killedbygoogle.com/" title="Google Graveyard">Want to venture a guess</a>
what happens to a project when Google has lost the market or shifts their headquarters' ORKs?

<img src={ require('./2024-06-27-arrower-origin-top-gun.gif').default } title="Competition leads to second places and losers" 
style = {{ display:'block', margin:'auto' }}/>
\
Now, _competition_ happens on the next hot trend.\
Bye bye web development 👋 <span style={{ color: '#999'}}>and bye bye AI market 👋</span>

Google and other large companies focus on cloud services.
They don't care enough about web development to make a real impact on the language or ecosystem.
So, the question is, is there a subset of the community that cares?

## Arrower for Web Development in Go
Google and other large companies create cloud microservices.
This work demands teams and budgets larger than those of typical small projects.
Not caring about resources and pushing for GenAI is not aiding 
solo developers and small teams building web applications. 
Arrower is an effort to address this:

First, by a building mindset!
This is more constructive compared to a competitive head-to-head of gaining market share. 
Building allows a long term perspective on web development,
and it brings lasting motivation and innovation.

Second, Arrower challenges some of the long-held conventions of the Go community to simplify web development:
* A framework that brings common building blocks together in a cohesive manner and avoids issues other frameworks have.
* Quick and productive (MVP) development in Go instead of Rails or Django.
* Focus on domain supporting abstractions and rethinking long-held biases, e.g. against reflection.

\
Arrower brings modern web development trends and developer productivity to Go. 
This includes innovations like hot reload long adopted by other languages, 
while it avoids known issues. 
There's a reason after all why Go developers don't like frameworks.

<a href="https://github.com/go-arrower/arrower" title="Arrower on GitHub">Check out Arrower</a>
and join the effort to make web development in Go more feasible and fun.
