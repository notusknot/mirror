import{c as p,s as _,v as f,m as v}from"./index3.js";const g="";let y=g;function O(n){y=n}let x="",b={};function U(n){}function z(n){}function P(n){b=n}function k(n){x=n}const w=p((n,t,e,h)=>{let{stores:s}=t,{page:m}=t,{constructors:o}=t,{components:a=[]}=t,{form:r}=t,{data_0:c=null}=t,{data_1:d=null}=t;_("__svelte__",s),s.page.notify,t.stores===void 0&&e.stores&&s!==void 0&&e.stores(s),t.page===void 0&&e.page&&m!==void 0&&e.page(m),t.constructors===void 0&&e.constructors&&o!==void 0&&e.constructors(o),t.components===void 0&&e.components&&a!==void 0&&e.components(a),t.form===void 0&&e.form&&r!==void 0&&e.form(r),t.data_0===void 0&&e.data_0&&c!==void 0&&e.data_0(c),t.data_1===void 0&&e.data_1&&d!==void 0&&e.data_1(d);let l,u;do l=!0,s.page.set(m),u=`


${o[1]?`${f(o[0]||v,"svelte:component").$$render(n,{data:c,this:a[0]},{this:i=>{a[0]=i,l=!1}},{default:()=>`${f(o[1]||v,"svelte:component").$$render(n,{data:d,form:r,this:a[1]},{this:i=>{a[1]=i,l=!1}},{})}`})}`:`${f(o[0]||v,"svelte:component").$$render(n,{data:c,form:r,this:a[0]},{this:i=>{a[0]=i,l=!1}},{})}`}

`;while(!l);return u});k("1676785111447");const S={csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,embedded:!1,env_public_prefix:"PUBLIC_",hooks:null,root:w,service_worker:!1,templates:{app:({head:n,body:t,assets:e,nonce:h,env:s})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="default" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="%sveltekit.assetes%/apple-touch-icon.png"
		/>
		<link rel="icon" type="image/svg+xml" href="`+e+`/icon.svg" />
		<meta name="viewport" content="width=device-width" />
		`+n+`
	</head>
	<body>
		<div>`+t+`</div>
	</body>
</html>
`,error:({status:n,message:t})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+n+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`}};function q(){return import("./hooks.server.js")}export{y as a,g as b,O as c,U as d,z as e,q as g,S as o,b as p,P as s,x as v};
