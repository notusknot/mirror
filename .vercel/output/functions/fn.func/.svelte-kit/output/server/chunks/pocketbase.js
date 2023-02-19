import o from"pocketbase";import{w as e}from"./index2.js";const t=new o("https://api.notusknot.com:443"),r=e(t.authStore.model);t.authStore.onChange(()=>{r.set(t.authStore.model)});export{r as c};
