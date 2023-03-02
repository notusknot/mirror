import{c as p,d as r,b as v,o as b,f as w,e as c,v as u}from"../../chunks/index3.js";import{c as $}from"../../chunks/Login.svelte_svelte_type_style_lang.js";import{w as x}from"../../chunks/index2.js";import"sse.js";const g={code:"form.svelte-10dodqx{display:flex;flex-direction:column;align-items:center;width:clamp(160px, 100%, 280px);padding:var(--padding)}label.svelte-10dodqx{width:100%}#password.svelte-10dodqx,#username.svelte-10dodqx{margin-bottom:calc(var(--padding))}button.svelte-10dodqx{width:clamp(0px, 100%, 160px);margin:calc(var(--padding) / 2) 0}span.svelte-10dodqx{margin-top:var(--padding);color:rgba(var(--text-codes), 0.6)}.error.svelte-10dodqx{color:var(--accent);margin:0}",map:null},h=p((e,n,d,m)=>{let t,s;return e.css.add(g),`${`<form class="svelte-10dodqx"><label for="username" class="svelte-10dodqx">Username </label>
		<input id="username" type="text" class="svelte-10dodqx"${r("value",t,0)}>

		<label for="password" class="svelte-10dodqx">Password </label>
		<input id="password" placeholder="at least 8 characters" type="password" class="svelte-10dodqx"${r("value",s,0)}>

		

		

		<button class="svelte-10dodqx">Login</button>

		<span class="svelte-10dodqx">If you don&#39;t have an account </span>
		<button class="svelte-10dodqx">Create account</button></form>`}`}),f=x([]);const z={code:'.todos.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{display:flex;flex-direction:column;align-items:center;gap:var(--padding)}input.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw,button.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{background-color:var(--bg)}ul.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{padding:0px;width:100%;display:flex;flex-direction:column;align-items:center;gap:var(--padding)}li.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{position:relative;gap:var(--padding);width:100%;display:flex}.todo-text.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{position:relative}.delete-button.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{position:absolute;right:0}.todo-text.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw::before{content:"";position:absolute;top:50%;height:2px;background-color:rgba(var(--text-codes), 0.75);width:0;transition:width 0.25s;will-change:width}.todo-text.checked.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw::before{width:100%}.checkbox.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw{position:relative;min-width:24px;max-height:24px;border:2px solid var(--bg3);border-radius:8px;cursor:pointer;background-color:var(--bg)}.checkbox.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw:hover,.checkbox.svelte-15mc4zw.svelte-15mc4zw.svelte-15mc4zw:active{border-color:var(--accent)}.checkbox.svelte-15mc4zw input[type="checkbox"].svelte-15mc4zw.svelte-15mc4zw{opacity:0}.checkbox.svelte-15mc4zw .checkmark.svelte-15mc4zw.svelte-15mc4zw:after{content:"";position:absolute;opacity:0;left:8px;top:4px;width:5px;height:10px;border:solid var(--text);border-width:0 3px 3px 0;transform:rotate(45deg);transition:opacity 150ms}.checkbox.svelte-15mc4zw input[type="checkbox"].svelte-15mc4zw:checked~.checkmark.svelte-15mc4zw:after{opacity:1}',map:null},y=p((e,n,d,m)=>{let t,s,a;t=v($,l=>l),a=v(f,l=>s=l);let i;return b(()=>{}),e.css.add(z),t(),a(),`<div class="todos svelte-15mc4zw"><ul class="svelte-15mc4zw">${s.length===0?"<p>You haven&#39;t added any tasks yet</p>":`${w(s,l=>`<li class="svelte-15mc4zw"><label class="checkbox svelte-15mc4zw"><input type="checkbox" aria-label="Toggle completed" ${l.checked?"checked":""} class="svelte-15mc4zw">
						<span class="checkmark svelte-15mc4zw"></span></label>
					<span class="${["todo-text svelte-15mc4zw",l.checked?"checked":""].join(" ").trim()}" contenteditable="true">${(o=>o===void 0?`${c(l.text)}`:o)(l.text)}</span>

					<button class="icon-button delete-button svelte-15mc4zw" aria-label="Delete todo"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"></path></svg></button>
				</li>`)}`}

		<input placeholder="manually add task" type="text" class="svelte-15mc4zw"${r("value",i,0)}></ul>
</div>`});const k={code:".journals.svelte-1h0frmy{height:100%;display:flex;flex-direction:column}.content.svelte-1h0frmy{display:flex;flex-direction:column;overflow-y:scroll;gap:var(--padding);padding-bottom:var(--padding);height:100%}form.svelte-1h0frmy{display:flex;gap:var(--padding)}input.svelte-1h0frmy{width:100%}.entry-date.svelte-1h0frmy{opacity:80%}",map:null};function _(e){return new Date(e).toLocaleString("default",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}const q=p((e,n,d,m)=>{let t,s,a;t=v($,o=>o);let i="",l=x([]);return a=v(l,o=>s=o),b(()=>{}),e.css.add(k),t(),a(),`<div class="journals svelte-1h0frmy"><div class="content svelte-1h0frmy">${w(s,o=>`<div class="entry"><span class="entry-date svelte-1h0frmy">${c(_(o.created))}: </span>
				<span class="entry-text">${c(o.text)}</span>
			</div>`)}</div>

	<form class="svelte-1h0frmy"><input placeholder="journal" class="svelte-1h0frmy"${r("value",i,0)}>
		<button>add </button>
		</form>
</div>`});const L={code:'input.svelte-k381vx{width:calc(4ch + var(--padding))}input.svelte-k381vx::-webkit-outer-spin-button,input.svelte-k381vx::-webkit-inner-spin-button{-webkit-appearance:none}input[type="number"].svelte-k381vx{-moz-appearance:textfield}',map:null},T=p((e,n,d,m)=>{let t=25,s=5,a=t,i=0;return e.css.add(L),`<div class="pomodoro"><div><p>${c("Work")}</p>
		<p>${c(a)}:${c(`0${i}`)}</p></div>

	${`<label for="timer-minutes">Timer Minutes:</label>
		<input type="number" id="timer-minutes" class="svelte-k381vx"${r("value",t,0)}>

		<label for="break-minutes">Break Minutes:</label>
		<input type="number" id="break-minutes" class="svelte-k381vx"${r("value",s,0)}>

		<button>Start</button>`}
</div>`});const j={code:"main.svelte-v51xpe.svelte-v51xpe{display:grid;grid-template-columns:1fr 1.618fr;grid-template-rows:1fr;height:100svh}main.svelte-v51xpe>.svelte-v51xpe{padding:calc(var(--padding) * 2)}.left.svelte-v51xpe.svelte-v51xpe{display:grid;grid-template-rows:1.618fr 1fr;grid-template-columns:1fr;background-color:var(--bg2);border-right:2px solid var(--bg3)}",map:null},D=p((e,n,d,m)=>{let t,s;return s=v($,a=>t=a),e.css.add(j),s(),`<main class="svelte-v51xpe">${t?`<div class="left svelte-v51xpe">${u(y,"Todos").$$render(e,{},{},{})}
			${u(T,"Pomodoro").$$render(e,{},{},{})}</div>

		<div class="right svelte-v51xpe">${u(q,"Journal").$$render(e,{},{},{})}</div>`:`${u(h,"Login").$$render(e,{},{},{})}`}
</main>`});export{D as default};
