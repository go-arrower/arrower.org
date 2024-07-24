"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[6796],{5945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),o=t(1151);const r={sidebar_position:1,title:"Why Arrower?"},s="Motivation",a={id:"why",title:"Why Arrower?",description:"A complete framework to develop Go web applications.",source:"@site/docs/why.md",sourceDirName:".",slug:"/why",permalink:"/docs/why",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/why.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Why Arrower?"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l={},c=[{value:"Principles",id:"principles",level:2},{value:"Contributing?",id:"contributing",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("i",{children:"A complete framework to develop Go web applications."})}),"\n",(0,i.jsx)(n.h1,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(n.p,{children:"This is an opinionated approach. Make sure that your goals and architectural drivers align with the\nones chosen by Arrower. Otherwise, we might not be a fit at all..."}),"\n",(0,i.jsx)(n.p,{children:"Developing websites and web applications for decades, it both became easier and more difficult\nto create and run a web app at the same time.\nOn the one end, tools like WordPress just replaced my previous work completely, while custom applications are still\nchallenging to build, as the requirements and expectations have increased significantly."}),"\n",(0,i.jsx)(n.p,{children:"Other communities like Rails, and Django have recognised the repeating boilerplate of web applications.\nThe Go community always took a stance against frameworks (often justified).\nHowever, working on small to mid-sized projects, I regularly get bogged down in technical boilerplate\nhandwriting parts of what is basically a project specific framework in the end, just in poor.\nThis makes it hard to focus on the users and the functions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Every project needs boilerplate"})," like linters, makefile, local automation, db migrations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Routine web stuff has to be puzzled together"})," like www router, view loading, template handling, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Massive time investments into repeating concerns"}),". Manual configuration setup, being busy with tech instead of features: different loggers all the time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A Go framework needs to fit the the language"})," Working with active record and frameworks like buffalo or beego just are not attractive and when used had quality issues"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Developer experience from other languages are not available in Go"})," Code life reloading: backend and frontend"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Time of npm is ending"})," Don't like JS & npm in the stack"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ops and Maintenance requirements have pilled up"})," increased expectations on dev-ops & observability (when self-hosting & managing)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not each project has the same needs and is confronted with all these problems.\nIf they sound familiar to you, though, you might like Arrower."}),"\n",(0,i.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Focus on the application."}),"\nKeep your users and the goals of the application in your focus.\nInstead of repeating technical concerns.\nFor this Arrower already comes with batteries included for things like Operations (observability) and support\n(admin dashboard).\nIncreasing the time you sent on business logic vs. infrastructural concerns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Developer comfort without fighting the framework."}),'\nWrite more "clean" and "maintainable" code.\nUtilise helpers for common tasks.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full stack, from ops to frontend."}),"\nThe goal is to enable small teams to do a lot.\nReduce the reliance on npm and JS but only to stay productive\nand not mess with technical concerns where they would not be required and can be done via hypermedia.\nIn no way will Arrower prevent this from you,\nand if you need more interactivity you can include your favorite frontend framework like Angular, react, vue, or others."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"From single file to multiple teams."}),"\nGrow your codebase as the needs require it.\nStart simple side projects, prototype rapidly, or engineer a solid SaaS application with your colleagues.\nFocus on your domain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simple where possible."}),"\nSoftware is all about tradeofs,\nArrower chooses operation simplicity (monolith)\nand simple development concepts (hypermedia) over current trend of the decade.\nIf you want enterprise or microservices, you might be wrong.\nBut in no way does Arrower intend to prevent you from doing so anyway."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Encourage proven experience."}),"\nThe Go community has always kept a high bar and prevent many bas habits to take root, e.g.\ninsisting that a logger is a dependency and must not be part of a ",(0,i.jsx)(n.code,{children:"ctx"}),'.\nArrower encourages a compilation of best practices and experience that will help to write "good"\nsoftware.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The goal is to keep up with innovation where the standard library does not, without patronising you.\nBe aware of your goals and architectural drivers, so you can design the think that solves the problem you actually have."}),"\n",(0,i.jsx)(n.h2,{id:"contributing",children:"Contributing?"}),"\n",(0,i.jsx)(n.p,{children:"At this point, Arrower is still experimental and does not accept code contributions.\nIt will accept contributions later on.\nAnd licencing will be looked at."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Feedback on the concepts, goals, and abstractions is very welcome!"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);