"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[920],{6466:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(9275),i=n(9437),o=n(8746),s=n(1699),c=n(1614),a=n(8672);const l={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};var d=n(5893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:o}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(f,{...e});const o=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},t)))})}},7413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151),o=n(6466);const s={},c="Observability",a={id:"basics/observability/index",title:"Observability",description:"To properly understand what is going on inside your application,",source:"@site/docs/basics/06-observability/index.md",sourceDirName:"basics/06-observability",slug:"/basics/observability/",permalink:"/docs/basics/observability/",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/06-observability/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/basics/testing/"},next:{title:"Logging",permalink:"/docs/basics/observability/logging"}},l={},d=[];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"observability",children:"Observability"}),"\n",(0,r.jsx)(t.p,{children:"To properly understand what is going on inside your application,\nyou can collect a whole range of telemetry."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["An application is properly instrumented when developers don\u2019t need to add more instrumentation to troubleshoot an issue, because they have all of the information they need.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/observability-primer/",children:"https://opentelemetry.io/docs/concepts/observability-primer/"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You can bring your own observability stack. Arrower does not force you into any specific direction,\nour recommendation is however: Grafana, Loki, Prometheus, and Tempo."}),"\n",(0,r.jsxs)(t.p,{children:["For metrics and traces Arrower uses ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OTEL"}),",\nfor logging the new ",(0,r.jsx)(t.code,{children:"slog"})," from the Go standard library."]}),"\n",(0,r.jsx)(t.admonition,{title:"Improve Docs",type:"note",children:(0,r.jsx)(t.p,{children:"Screenshot how logs & trances & metrics are linked in Grafana"})}),"\n",(0,r.jsxs)(t.p,{children:["To quickstart your development the ",(0,r.jsx)(t.code,{children:"docker-compose.yaml"})," file contains everything you need locally\nand can give inspiration on how to setup your own infrastructure."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(o.Z,{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.admonition,{title:"Improve Docs",type:"note",children:[(0,r.jsx)(t.p,{children:"Show dashboard with some interesting charts & queries"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Number of http requests"}),"\n",(0,r.jsx)(t.li,{children:"Number of application functions called"}),"\n",(0,r.jsx)(t.li,{children:"Number of Jobs"}),"\n",(0,r.jsx)(t.li,{children:"Average response times"}),"\n",(0,r.jsx)(t.li,{children:"Number of failures"}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(7294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);