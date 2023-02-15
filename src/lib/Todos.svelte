<svelte:options immutable />

<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { writable } from "svelte/store";
	import Pomodoro from "$lib/Pomodoro.svelte";

	type Todo = {
		id: string;
		text: string;
		checked: boolean;
		user: string;
	};

	let todoText: string;
	let todos = writable<Todo[]>([]);
	let unsubscribe: () => void;

	onMount(async () => {
		// Get initial items
		const [initialTodos, subscribeFunc] = await Promise.all([
			pb.collection("todos").getList(1, 50, {
				sort: "created",
			}),
			pb.collection("todos").subscribe("*", async ({ action, record }) => {
				if (action === "create") {
					todos.update((items) => [...items, record as unknown as Todo]);
				}
				if (action === "delete") {
					todos.update((items) =>
						items.filter((item) => item.id !== record.id)
					);
				}
				if (action === "update") {
					const resultList = await pb.collection("todos").getList(1, 50, {
						sort: "created",
					});
					todos.set(resultList.items as unknown as Todo[]);
				}
			}),
		]);
		todos.set(initialTodos.items as unknown as Todo[]);
		unsubscribe = subscribeFunc;
	});

	onDestroy(() => {
		unsubscribe?.();
	});

	async function addTodo() {
		if (!todoText) {
			return;
		}

		const data = {
			text: todoText,
			checked: false,
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("todos").create(data);
		todoText = "";
	}

	async function deleteTodo(todo: Todo) {
		await pb.collection("todos").delete(todo.id);
	}

	async function toggleChecked(todo: Todo) {
		const updatedTodo = { ...todo, checked: !todo.checked };
		todos.update((items) =>
			items.map((item) => (item.id === todo.id ? updatedTodo : item))
		);
		await pb.collection("todos").update(todo.id, { checked: !todo.checked });
	}

	export let className: string;

	let showPomodoro = false;

	function togglePomodoro() {
		showPomodoro = !showPomodoro;
	}
</script>

<div class={className}>
	<div>
		{#each $todos as todo (todo.id)}
			<div class="todo">
				<label class="checkbox">
					<input
						type="checkbox"
						checked={todo.checked}
						on:change={() => toggleChecked(todo)}
					/>
					<span class="checkmark" />
				</label>
				<span class="todo-text" class:checked={todo.checked}>{todo.text}</span>

				<button
					class="icon-button pomodoro-button"
					on:click={() => togglePomodoro()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"
						/></svg
					>
				</button>

				<button
					class="icon-button delete-button"
					on:click={() => deleteTodo(todo)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 15 15"
						><path
							fill="currentColor"
							d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
						/></svg
					>
				</button>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={addTodo}>
		<input
			autocomplete="off"
			placeholder="add task"
			type="text"
			bind:value={todoText}
			on:blur={addTodo}
		/>
	</form>
</div>

{#if showPomodoro}
	<Pomodoro className="pomodoro" />
{/if}

<style>
	.todo {
		display: flex;
		position: relative;
		padding: calc(var(--padding) / 4) 0;
	}

	.todos {
		width: clamp(160px, 100%, 500px);
		padding: var(--padding);
	}

	.todo-text {
		padding: 0 var(--padding);
		position: relative;
	}

	.delete-button {
		position: absolute;
		right: 0;
	}

	.pomodoro-button {
		position: absolute;
		right: calc(var(--padding) * 1.7);
	}

	.todo-text::before {
		content: "";
		position: absolute;
		left: calc(var(--padding) - 1ch / 2);
		top: 50%;
		height: 2px;
		background-color: rgba(var(--text-codes), 0.75);
		width: 0;
		transition: width 0.25s;
		will-change: width;
	}

	.todo-text.checked::before {
		width: calc(100% - var(--padding) - 1ch / 2);
	}

	.checkbox {
		position: relative;
		min-width: 24px;
		max-height: 24px;
		border: 1px solid var(--bg3);
		border-radius: 8px;
		cursor: pointer;
		background-color: var(--bg2);
	}

	.checkbox:hover,
	.checkbox:active {
		border: 1px solid var(--accent);
	}

	.checkbox input[type="checkbox"] {
		position: absolute;
		opacity: 0;
	}

	.checkbox .checkmark:after {
		content: "";
		position: absolute;
		opacity: 0;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid var(--text);
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
		transition: opacity 150ms;
	}

	.checkbox input[type="checkbox"]:checked ~ .checkmark:after {
		opacity: 1;
	}

	form {
		padding-top: var(--padding);
		display: flex;
		justify-content: center;
	}

	form input {
		width: clamp(160px, 100%, 320px);
	}
</style>
