"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),o=r(6010),i=r(2802),a=r(9960),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:a},a))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},4777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),i=r(2991);const a={},c="Observability",s={unversionedId:"basics/observability/index",id:"basics/observability/index",title:"Observability",description:"To properly understand what is going on inside your application,",source:"@site/docs/basics/03-observability/index.md",sourceDirName:"basics/03-observability",slug:"/basics/observability/",permalink:"/docs/basics/observability/",draft:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/03-observability/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/basics/testing/"},next:{title:"Logging",permalink:"/docs/basics/observability/logging"}},l={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observability"},"Observability"),(0,o.kt)("p",null,"To properly understand what is going on inside your application,\nyou can collect a whole range of telemetry."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An application is properly instrumented when developers don\u2019t need to add more instrumentation to troubleshoot an issue, because they have all of the information they need.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/observability-primer/"},"https://opentelemetry.io/docs/concepts/observability-primer/"))),(0,o.kt)("p",null,"You can bring your own observability stack. Arrower does not force you into any specific direction,\nour recommendation is however: Grafana, Loki, Prometheus, and Tempo."),(0,o.kt)("p",null,"For metrics and traces Arrower uses ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OTEL"),",\nfor logging the new ",(0,o.kt)("inlineCode",{parentName:"p"},"slog")," from the Go standard library."),(0,o.kt)("admonition",{title:"Improve Docs",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Screenshot how logs & trances & metrics are linked in Grafana")),(0,o.kt)("p",null,"To quickstart your development the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file contains everything you need locally\nand can give inspiration on how to setup your own infrastructure."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{mdxType:"DocCardList"}),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"Improve Docs",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Show dashboard with some interesting charts & queries"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Number of http requests"),(0,o.kt)("li",{parentName:"ul"},"Number of application functions called"),(0,o.kt)("li",{parentName:"ul"},"Number of Jobs"),(0,o.kt)("li",{parentName:"ul"},"Average response times"),(0,o.kt)("li",{parentName:"ul"},"Number of failures"))))}d.isMDXComponent=!0}}]);