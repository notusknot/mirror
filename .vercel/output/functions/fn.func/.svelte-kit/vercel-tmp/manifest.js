export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.png","icon.svg","icon192.png","icon512.png","robots.txt","svelte.svg","tauri.svg","vite.svg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-ff2699f3.js","imports":["_app/immutable/start-ff2699f3.js","_app/immutable/chunks/index-0689c3c5.js","_app/immutable/chunks/singletons-0ec1eb02.js","_app/immutable/chunks/control-e7f5239e.js","_app/immutable/chunks/parse-d12b0d5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/journal",
				pattern: /^\/journal\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
