"use strict";(self.webpackChunkarrower_org=self.webpackChunkarrower_org||[]).push([[6103],{3182:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(7294);var a=n(6905),i=n(7255),o=n(8015),r=n(7762),s=n(8762),l=n(2994),c=n(1614),d=n(6948),u=n(5893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.C)(),{title:n,description:a,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var h=n(2411),f=n(6294);function p(){const e=(0,f.i)();return(0,u.jsx)(h.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(5967),x=n(4007);function b(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,r.C)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=d;return(0,u.jsxs)(s.Z,{sidebar:t,toc:!h&&i.length>0?(0,u.jsx)(v.Z,{toc:i,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(l.Z,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},5967:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(6905),i=n(1351);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(5893);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.Z,{...n,linkClassName:s,linkActiveClassName:l})})}},1351:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),i=n(6793);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(5013),m=n(5893);function g(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.L)(),p=c??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[s,l,p,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:s,...g})}},4007:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var a=n(6905),i=n(1614),o=n(2411),r=n(5893);function s(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8015),u=n(8555);function m(e){let{className:t}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},6294:(e,t,n)=>{n.d(t,{C:()=>d,i:()=>u});var a=n(1402),i=n(6832),o=n(5540);var r=n(7762);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.Cg)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,g=a.image??i.image,h=i.keywords??[],f=`${t.url}${o.permalink}`,p=m?s(m):void 0;return{"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:d,name:d,description:u,datePublished:r,...p?{dateModified:p}:{},...l(o.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.C)(),{siteConfig:d}=(0,i.Z)(),{withBaseUrl:u}=(0,a.Cg)(),{date:m,title:g,description:h,frontMatter:f,lastUpdatedAt:p}=n,v=t.image??f.image,x=f.keywords??[],b=p?s(p):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}}}]);