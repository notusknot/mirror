import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-d12b553e.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-d12b553e.js","_app/immutable/chunks/index-42be36f1.js","_app/immutable/chunks/Login-8da91d3b.js","_app/immutable/chunks/pocketbase-132547e6.js"];
export const stylesheets = ["_app/immutable/assets/_page-bff156f1.css","_app/immutable/assets/Login-a6eabac3.css"];
export const fonts = [];
