"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[8222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(n),c=r,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,slug:"logging"},l="Logging",i={unversionedId:"basics/observability/logging",id:"basics/observability/logging",title:"Logging",description:"Log to see what is going on in your application.",source:"@site/docs/basics/observability/logging.md",sourceDirName:"basics/observability",slug:"/basics/observability/logging",permalink:"/docs/basics/observability/logging",draft:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/basics/observability/logging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"logging"},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/docs/basics/observability/"},next:{title:"Metrics",permalink:"/docs/basics/observability/metrics"}},s={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Available Handlers",id:"available-handlers",level:2},{value:"Runtime Configuration",id:"runtime-configuration",level:2},{value:"Change The Log Level",id:"change-the-log-level",level:3},{value:"Writing Log Messages",id:"writing-log-messages",level:2},{value:"<code>slog</code> Logger Interface",id:"slog-logger-interface",level:3},{value:"<code>alog</code> Logger Interface",id:"alog-logger-interface",level:3},{value:"Correlate With Tracing",id:"correlate-with-tracing",level:2}],p={toc:g},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Log to see what is going on in your application."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Arrower uses ",(0,r.kt)("inlineCode",{parentName:"p"},"slog.Logger")," as an interface for the application.\nIt provides its own implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"slog.Handler"),", to add interesting extra functionalities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logger := alog.New()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,r.kt)("th",{parentName:"tr",align:null},"Key Features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"production"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"New")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Defaults to level ",(0,r.kt)("inlineCode",{parentName:"td"},"INFO")),(0,r.kt)("li",null,"Formats in JSON"),(0,r.kt)("li",null,"Writes to Stderr")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"development"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NewDevelopment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Defaults to level ",(0,r.kt)("inlineCode",{parentName:"td"},"DEBUG")),(0,r.kt)("li",null,"Writes text to Stderr"),(0,r.kt)("li",null,"Sends logs to local loki")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"testing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NewTest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Writes text to a given ",(0,r.kt)("inlineCode",{parentName:"td"},"io.Writer"))))))),(0,r.kt)("h2",{id:"available-handlers"},"Available Handlers"),(0,r.kt)("p",null,"A logger can take one or multiple handlers that it writes too simultaneously.\nYou can bring and set your own handler(s).\nThis gives you more control over your logging needs, compared to one of the default loggers from above. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"logger := alog.New(\n    alog.WithHandler(h0),\n    alog.WithHandler(h1),\n)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note, that the level of a given handler is ignored and the level of the logger is used\nfor all handlers instead.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slog.NewTextHandler"),(0,r.kt)("td",{parentName:"tr",align:null},"The standard libraries handler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slog.NewJSONHandler"),(0,r.kt)("td",{parentName:"tr",align:null},"The standard libraries handler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NewLokiHandler"),(0,r.kt)("td",{parentName:"tr",align:null},"Sends all logs to a loki instance. Use this for local development only!",(0,r.kt)("br",null)," For production log to Stderr and use docker, kubernetes, or other drivers to ship the logs.")))),(0,r.kt)("h2",{id:"runtime-configuration"},"Runtime Configuration"),(0,r.kt)("p",null,"To conveniently debug issues, the logger supports changing some properties at runtime."),(0,r.kt)("h3",{id:"change-the-log-level"},"Change The Log Level"),(0,r.kt)("p",null,"The log level will be changed for all handlers, independent of their specific configuration. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"alog.Unwrap(logger).SetLevel(slog.LevelDebug)\n")),(0,r.kt)("h2",{id:"writing-log-messages"},"Writing Log Messages"),(0,r.kt)("h3",{id:"slog-logger-interface"},(0,r.kt)("inlineCode",{parentName:"h3"},"slog")," Logger Interface"),(0,r.kt)("p",null,"Arrower returns always an ",(0,r.kt)("inlineCode",{parentName:"p"},"slog.Logger")," for logging. So you can use the known API and all the available methods\nthat Go is offering."),(0,r.kt)("p",null,"The Go community has struggled for some time to find good interfaces, that applies to loggers as well.\nCheck out Dave Cheney's post ",(0,r.kt)("a",{parentName:"p",href:"https://dave.cheney.net/2015/11/05/lets-talk-about-logging"},"Let's talk about logging"),"\nwhere he makes a compelling argument to only log two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Things that developers care about when they are developing or debugging software. => ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG")),(0,r.kt)("li",{parentName:"ul"},"Things that users care about when using your software. => ",(0,r.kt)("inlineCode",{parentName:"li"},"INFO"))),(0,r.kt)("p",null,"One important consideration though: It is recommended to give the context to the methods,\nso use ",(0,r.kt)("inlineCode",{parentName:"p"},"Log()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LogAttrs()"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"InfoCtx()")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"Info()"),".\nThe context is carrying information to ",(0,r.kt)("a",{parentName:"p",href:"#correlate-with-tracing"},"correlate the logs with traces"),"."),(0,r.kt)("h3",{id:"alog-logger-interface"},(0,r.kt)("inlineCode",{parentName:"h3"},"alog")," Logger Interface"),(0,r.kt)("p",null,"Arrower recommends you the use the ",(0,r.kt)("inlineCode",{parentName:"p"},"slog.Logger")," interface.\nYou probably don't want to bind your code to our logger interface."),(0,r.kt)("p",null,"That said, the project itself uses a more restricted subset of the ",(0,r.kt)("inlineCode",{parentName:"p"},"slog")," interface, that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"encourages the use of methods taking context.Context, so that tracing information can be correlated"),(0,r.kt)("li",{parentName:"ol"},"encourages the use of the levels ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"INFO"),", without preventing the others\n(as Arrower has its own levels in case you want to see what its doing)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n    Log(ctx context.Context, level slog.Level, msg string, args ...any)\n    LogAttrs(ctx context.Context, level slog.Level, msg string, attrs ...slog.Attr)\n    DebugCtx(ctx context.Context, msg string, args ...any)\n    InfoCtx(ctx context.Context, msg string, args ...any)\n}\n")),(0,r.kt)("h2",{id:"correlate-with-tracing"},"Correlate With Tracing"),(0,r.kt)("p",null,'As Arrower encourages web applications running in the cloud, they might span multiple machines.\nTo make it easy to trace down a "request", arrower adds the ',(0,r.kt)("inlineCode",{parentName:"p"},"traceID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spanID")," (if present)\nautomatically to each output."),(0,r.kt)("admonition",{title:"Improve Docs",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Screenshot how logs have IDs")),(0,r.kt)("p",null,"In return each log is also recorded as an event in the span, to make it easier to debug\npotentially issues."),(0,r.kt)("admonition",{title:"Improve Docs",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Screenshot how traces have logs with all attributes")),(0,r.kt)("p",null,"For more on tracing, see ",(0,r.kt)("a",{parentName:"p",href:"traces"},"traces"),"."))}d.isMDXComponent=!0}}]);