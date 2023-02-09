import type { Handle } from "@sveltejs/kit";

const securityHeaders = {
	'Content-Security-Policy': "default-src 'self' vitals.vercel-insights.com",
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
	'X-Frame-Options': 'SAMEORIGIN',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin',
    'X-XSS-Protection': '0',
}

export const handle = (async ({ event, resolve }) => {
	let theme: string | null = null;

	const newTheme = event.url.searchParams.get("theme");
	const cookieTheme = event.cookies.get("colortheme");

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('data-theme=""', `data-theme="${theme}"`),
		});
	}

	const response = await resolve(event);

	Object.entries(securityHeaders).forEach(
        ([header, value]) => response.headers.set(header, value)
    );

	return response;
}) satisfies Handle;
