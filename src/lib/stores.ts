import { writable } from "svelte/store";

export type Todo = {
	id: string;
	text: string;
	checked: boolean;
	user: string;
};

export const todos = writable<Todo[]>([]);
