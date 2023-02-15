import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			srcDir: "./src",
			mode: "development",
			strategies: "injectManifest",
			filename: "prompt-sw.ts",
			scope: "/",
			base: "/",
			manifest: {
				short_name: "Productivity",
				name: "Productivity",
				start_url: "/",
				scope: "/",
				display: "standalone",
				theme_color: "#a6e3a1",
				background_color: "#b4befe",
				icons: [
					{
						src: "/icon.svg",
						sizes: "any",
						type: "image/svg+xml",
					},
					{
						src: '/icon192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icon512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/icon512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
			injectManifest: {
				globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"],
			},
			devOptions: {
				enabled: true,
				type: "module",
				navigateFallback: "/",
			},
			// if you have shared info in svelte config file put in a separate module and use it also here
			kit: {},
		}),
	],
};

export default config;
