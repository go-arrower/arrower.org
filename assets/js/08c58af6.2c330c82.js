"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[8965],{8825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(5893),r=n(1151);const i={sidebar_position:2},a="Auth",o={id:"context/auth",title:"Auth",description:"All things related to authentication.",source:"@site/docs/context/auth.md",sourceDirName:"context",slug:"/context/auth",permalink:"/docs/context/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/go-arrower/arrower.org/tree/master/docs/context/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contexts",permalink:"/docs/context/"},next:{title:"Admin",permalink:"/docs/context/admin"}},d={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Accessing The User From A Web Request",id:"accessing-the-user-from-a-web-request",level:2},{value:"Protecting Routes",id:"protecting-routes",level:2},{value:"Settings",id:"settings",level:2},{value:"Manually Authenticating Users",id:"manually-authenticating-users",level:2},{value:"Events",id:"events",level:2},{value:"Administrate Users",id:"administrate-users",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"auth",children:"Auth"}),"\n",(0,s.jsx)(t.p,{children:"All things related to authentication."}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.p,{children:"Arrower Auth provides a email + password authentication."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"In the future more options and pluggable backends are possible."})}),"\n",(0,s.jsx)(t.h2,{id:"accessing-the-user-from-a-web-request",children:"Accessing The User From A Web Request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"\n// Retrieve the currently authenticated user's ID.\nuserID := auth.CurrentUserID(ctx)\n\n// Check if a user is logged in.\nisLoggedIn := auth.IsLoggedIn(ctx)\n\n// Check if a user has superuser privileges.\nisSuperUser := auth.IsSuperUser(ctx)\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"protecting-routes",children:"Protecting Routes"}),"\n",(0,s.jsx)(t.p,{children:"Arrower has a set of middlewares that regulate access to a given route."}),"\n",(0,s.jsx)(t.p,{children:"All routes of the Admin Context are already protected."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'\n// Protect an individual route.\nrouter.GET("/your/protected/url", nil, auth.EnsureUserIsLoggedInMiddleware)\n\n// Protect all routes.\nadminRouter.Use(auth.EnsureUserIsSuperuserMiddleware)\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(t.p,{children:"tbd"}),"\n",(0,s.jsx)(t.h2,{id:"manually-authenticating-users",children:"Manually Authenticating Users"}),"\n",(0,s.jsx)(t.p,{children:"tbd"}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.p,{children:"The Auth Context is emiting the following events"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"TODO"})}),"\n",(0,s.jsx)(t.h2,{id:"administrate-users",children:"Administrate Users"}),"\n",(0,s.jsx)(t.p,{children:"If the Admin Context is sued you can"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"List and manage all Users"}),"\n",(0,s.jsx)(t.li,{children:"Login as a User, for service and helpdesk purposes"}),"\n",(0,s.jsx)(t.li,{children:"Change Auth settings"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Add screenshots"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);