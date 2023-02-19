import{g as n,c as b,d as c,e as t}from"../../chunks/index3.js";const u=()=>{const s=n("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},p={subscribe(s){return u().page.subscribe(s)}},d=b((s,a,g,i)=>{let e,r;return r=c(p,o=>e=o),r(),`<h1>${t(e.status)}</h1>
<p>${t(e.error?.message)}</p>`});export{d as default};
