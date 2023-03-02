import e from"pocketbase";import{w as o}from"./index2.js";const t=new e("https://api.notusknot.com:443"),s=o(t.authStore.model);t.authStore.onChange(()=>{s.set(t.authStore.model)});export{s as c};
