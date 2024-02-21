"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[473],{6466:(e,t,n)=>{n.d(t,{Z:()=>y});n(7294);var r=n(9275),o=n(9437),i=n(8746),c=n(1699),s=n(1614),a=n(8672);const d={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:i}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),i&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,o.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return(0,l.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(f,{...e});const i=(0,o.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(x,{item:e})},t)))})}},3849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(5893),o=n(1151),i=n(6466);const c={sidebar_position:4},s="Contexts",a={id:"context/index",title:"Contexts",description:"Arrower provides a set of Contexts, that help you to get started quickly with commonly required functionality.",source:"@site/docs/context/index.md",sourceDirName:"context",slug:"/context/",permalink:"/docs/context/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/context/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Traces",permalink:"/docs/basics/observability/traces"},next:{title:"Settings",permalink:"/docs/context/settings"}},d={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"contexts",children:"Contexts"}),"\n",(0,r.jsx)(t.p,{children:"Arrower provides a set of Contexts, that help you to get started quickly with commonly required functionality."}),"\n",(0,r.jsxs)(t.p,{children:["The name ",(0,r.jsx)(t.code,{children:"Context"})," is taken from DDD and indicates that this are clearly separated parts of the code.\nYou might think of them as a component in a component architecture, or a module in a majestic modular monolith, or\na service in a microservice architecture."]}),"\n",(0,r.jsx)(t.p,{children:"Each Context is optional, and you don't need it to run your application.\nCurrently, the deployment of an arrower application happens in a single deployable unit,\nbut you can imagine each Context could be deployed independently in the future."}),"\n",(0,r.jsx)(i.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7294);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);