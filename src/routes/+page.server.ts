import { Configuration, OpenAIApi } from "openai";
import { SECRET_API_KEY } from "$env/static/private";

const configuration = new Configuration({
	apiKey: SECRET_API_KEY,
});
const openai = new OpenAIApi(configuration);

let extracted;

export const load = () => {
	return {
		extracted,
	};
};

export const actions = {
	default: async ({ request }) => {
		extracted = undefined;
		const formData = await request.formData();
		const prompt: string = formData.get("prompt");
		const cleanPrompt = prompt.trim().endsWith(".")
			? prompt.slice(0, -1)
			: prompt + " ->";

		const response = await openai.createCompletion({
			model: "ada:ft-personal-2023-02-23-20-01-28",
			prompt: cleanPrompt,
			temperature: 0.75,
			max_tokens: 100,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
			stop: ["]}"],
		});
		const generatedText = response.data.choices[0].text + "]}";
		const cleanedText =
			generatedText.charAt(0) === "."
				? generatedText.slice(1)
				: generatedText.replace(/^[^\.]*\./, "");
		console.log(cleanedText);
		extracted = JSON.parse(cleanedText);
	},
};
