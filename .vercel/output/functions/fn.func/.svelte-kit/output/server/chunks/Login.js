import{c as n,d as c,f as t}from"./index3.js";import{c as d}from"./pocketbase.js";import"./index.js";const i={code:"div.svelte-s69jy6{width:clamp(160px, 100%, 280px);padding:var(--padding)}#password.svelte-s69jy6{margin-bottom:calc(var(--padding) * 2)}#username.svelte-s69jy6{margin-bottom:var(--padding)}button.svelte-s69jy6{width:clamp(0px, 100%, 160px);margin:0 auto}form.svelte-s69jy6{display:flex;flex-direction:column}span.svelte-s69jy6{color:rgba(var(--text-codes), 0.6);text-align:center}.no-account.svelte-s69jy6{margin-top:calc(var(--padding) * 1.5);margin-bottom:calc(var(--padding) / 4)}.error.svelte-s69jy6{color:var(--accent)}",map:null},b=n((a,p,u,v)=>{let s,e;e=c(d,l=>s=l);let r,o;return a.css.add(i),e(),`${s?'<button class="svelte-s69jy6">Sign Out </button>':`<div class="svelte-s69jy6"><form class="svelte-s69jy6"><label for="username">Username </label>
			<input id="username" type="text" class="svelte-s69jy6"${t("value",r,0)}>
			<label for="password">Password </label>
			<input id="password" placeholder="at least 8 characters" type="password" class="svelte-s69jy6"${t("value",o,0)}>

			

			
			<button class="svelte-s69jy6">Login</button>
			<span class="no-account svelte-s69jy6">If you don&#39;t have an account </span>
			<button class="svelte-s69jy6">Create account</button></form></div>`}`});export{b as L};
