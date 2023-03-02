import{e as c}from"../../../../chunks/index.js";const n="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",m=async({request:s})=>{try{const t=await s.json();if(!t)throw new Error("Request data missing");const{context:e}=t;if(!e)throw new Error("No context provided");const a={model:"ada:ft-personal-2023-03-01-20-13-37",prompt:`${e.trim()} 

###

`,temperature:.75,max_tokens:256,stop:["]}"],stream:!0},o=await fetch("https://api.openai.com/v1/completions",{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});if(!o.ok){const r=await o.json();throw console.error(r),new Error("Failed to create completion",r)}return new Response(o.body,{headers:{"Content-Type":"text/event-stream"}})}catch(t){throw console.error(t),c(500,"An error occurred")}};export{m as POST};
