---
authors: arrower
tags: [Arrower]

#keywords: []
#description:
#image:
#slug:
#last_update: 

draft: true
---


# Go's Roadmap is Missing Web Development

Go is fine-tuned for the development of cli and cloud & network services. 
With the focus on stability, security, performance, and developer tool support it is a great language,
and it is compelling to use Go to build websites as well.


<!-- truncate -->


## Go is Not Optimised for Web Development
When Go came out it was a refreshing head start on a new web project:
testing is backed into Go, JSON marshalling is supported out of the box, 
it felt more like PHP than like Java, and many more amazing moments.
Over the years the expectations have changed and in many regards Go is not build or optimised for web development.

This is an issue for solo developers and small teams that need to build and ship things 
but still want to rely on the speed, type safety, and tooling of the language.
After all, Go feels a lot like any other scripting language used for web development but without the issues.
So why should it be hard to develop websites with it?

Google and other enterprises are operating mostly in the cloud space
and do not care enough about web development to make a dent.
So the question is, if there is a subset of the community that cares? 

Google et al. develop cloud microservices which implies team sizes and budgets that are significantly different to the 
conditions of the average small team shipping something.
At the GopherCon in Berlin this summer, Google outlined its perspective on Go: \
They mapped programming languages against common use cases and judged the languages by the level of adoption for those use cases. 
With this lens Google intends to compete in the cloud and AI market of programming languages to gain more market share.

Winning market share is a mindset that thinks in terms of competition with means: winners and losers:
<img src={require('./2024-06-27-arrower-origin-top-gun.gif').default} title="Competition leads to second places and losers" 
style = {{  display:'block', margin:'auto'}}/>
\
In conversations with the Go team at the GopherCon they made it clear to me that they don't want to focus on web development.


## Arrower for Web Development in Go
Go's focus on the problems of large companies and the push for generative AI
is not aiding solo devs and small teams in developing web applications.
Arrower is an effort to address this:

First, by a building mindset!. This is more constructive compared to a competitive head-to-head of gaining market share.
This allows a long term focus on the domain of web development with lasting motivation and success.
\
Do you <a href="https://killedbygoogle.com/" title="Google Graveyard">venture a guess</a> 
what happens to a project where Google has lost the market or shifts their headquarter's ORKs 
and _competition_ is happening on the next hot trend? 👋 AI market

Second, Arrower challenges some of the long held conventions in the Go community to simplify the web development:
* A framework that brings common building blocks together in a cohesive fashion 
  and tries to avoid some the issues other frameworks have.
* Quick and productive development (MVP) in Go instead of Rails or Django.
* Focus on domain supporting abstractions and reduction of gluing parts together, 
  and accepting long held biases against reflection.

\
Arrower brings modern web development trends and DX (like hot reload) to Go and keeps iniquitous issues at bay.
There is a reason after all why Go developers don't like frameworks.

<a href="https://github.com/go-arrower/arrower" title="Arrower on GitHub">Check out Arrower</a>
and join the community effort to make web development in Go more feasible and fun.
