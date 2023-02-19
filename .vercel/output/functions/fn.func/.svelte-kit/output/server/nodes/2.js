import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-004cf717.js';
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/components/pages/_page.svelte-004cf717.js","_app/immutable/chunks/index-0689c3c5.js","_app/immutable/chunks/Login-980ef05e.js","_app/immutable/chunks/pocketbase-91d466f8.js","_app/immutable/chunks/control-e7f5239e.js"];
export const stylesheets = ["_app/immutable/assets/_page-da307bf8.css","_app/immutable/assets/Login-60383b18.css"];
export const fonts = [];
