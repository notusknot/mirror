import { SECRET_API_KEY } from "$env/static/private";
import type { RequestHandler } from "./$types";
import type { CreateCompletionRequest } from "openai";
import { error } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
	try {
		if (!SECRET_API_KEY) {
			throw new Error("SECRET_API_KEY env var not set");
		}

		const requestData = await request.json();

		if (!requestData) {
			throw new Error("Request data missing");
		}

		const { context } = requestData;

		if (!context) {
			throw new Error("No context provided");
		}

		const prompt = `${context.trim()} \n\n###\n\n`;

		const completionOpts: CreateCompletionRequest = {
			model: "ada:ft-personal-2023-03-01-20-13-37",
			prompt,
			temperature: 0.75,
			max_tokens: 256,
			stop: ["]}"],
			stream: true,
		};

		const response = await fetch("https://api.openai.com/v1/completions", {
			headers: {
				Authorization: `Bearer ${SECRET_API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(completionOpts),
		});

		if (!response.ok) {
			const err = await response.json();
			console.error(err);
			throw new Error("Failed to create completion", err);
		}

		return new Response(response.body, {
			headers: {
				"Content-Type": "text/event-stream",
			},
		});
	} catch (err) {
		console.error(err);
		throw error(500, "An error occurred");
	}
};
