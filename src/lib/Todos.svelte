<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { todos } from "$lib/stores";
	import type { Todo } from "$lib/stores";

	let todoText: string;
	let unsubscribe: () => void;

	const getInitialTodos = async () => {
		return pb.collection("todos").getList(1, 50, {
			sort: "created",
		});
	};

	const subscribeToTodos = async () => {
		return pb.collection("todos").subscribe("*", async ({ action, record }) => {
			if (action === "create") {
				todos.update((items) => [...items, record as unknown as Todo]);
			} else if (action === "delete") {
				todos.update((items) => items.filter((item) => item.id !== record.id));
			} else if (action === "update") {
				const resultList = await getInitialTodos();
				todos.set(resultList.items as unknown as Todo[]);
			}
		});
	};

	onMount(async () => {
		const [initialTodos, subscribeFunc] = await Promise.all([
			getInitialTodos(),
			subscribeToTodos(),
		]);
		todos.set(initialTodos.items as unknown as Todo[]);
		unsubscribe = subscribeFunc;
	});

	onDestroy(() => {
		unsubscribe?.();
	});

	const addTodo = async (text: string) => {
		if (!text) {
			return;
		}

		const data = {
			text: text,
			checked: false,
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("todos").create(data);
		todoText = "";
	};

	const deleteTodo = async (todo: Todo) => {
		await pb.collection("todos").delete(todo.id);
	};

	const updateTodo = async (todo: Todo, text: string) => {
		await pb.collection("todos").update(todo.id, { text });
	};

	const toggleChecked = async (todo: Todo) => {
		const updatedTodo = { ...todo, checked: !todo.checked };
		await pb
			.collection("todos")
			.update(todo.id, { checked: updatedTodo.checked });
		todos.update((items) =>
			items.map((item) => (item.id === todo.id ? updatedTodo : item))
		);
	};
</script>

<div class="todos">
	<ul>
		{#if $todos.length === 0}
			<p> You haven't added any tasks yet </p>
		{:else}
			{#each $todos as todo (todo.id)}
				<li class="todo">
					<label class="checkbox">
						<input
							type="checkbox"
							aria-label="Toggle completed"
							checked={todo.checked}
							on:change={() => toggleChecked(todo)}
						/>
						<span class="checkmark" />
					</label>
					<span
						class="todo-text"
						contenteditable="true"
						on:blur={() => updateTodo(todo)}
						bind:textContent={todo.text}
						class:checked={todo.checked}>{todo.text}</span
					>

					<button
						class="icon-button delete-button"
						aria-label="Delete todo"
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
				</li>
			{/each}
		{/if}

		<input
			placeholder="manually add task"
			type="text"
			on:keydown={(e) => {
				if (e.key === "Enter") addTodo(todoText);
			}}
			on:blur={() => addTodo(todoText)}
			bind:value={todoText}
		/>
	</ul>
</div>

<style>
	[contenteditable]:focus {
		outline: 2px solid var(--accent);
		border-radius: calc(var(--padding) / 2);
	}

	.todos {
		padding: calc(var(--padding) * 2);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--padding);
	}

	input,
	button {
		background-color: var(--bg);
	}

	.todo {
		display: flex;
		position: relative;
		padding-bottom: var(--padding);
		width: 100%;
	}

	ul {
		padding: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		padding-bottom: var(--padding);
	}

	.todo-text {
		padding: 0 calc(var(--padding) / 2);
		margin: 0 calc(var(--padding) / 2);
		position: relative;
	}

	.delete-button {
		position: absolute;
		right: 0;
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
		border: 2px solid var(--bg3);
		border-radius: 8px;
		cursor: pointer;
		background-color: var(--bg);
	}

	.checkbox:hover,
	.checkbox:active {
		border-color: var(--accent);
	}

	.checkbox input[type="checkbox"] {
		opacity: 0;
	}

	.checkbox .checkmark:after {
		content: "";
		position: absolute;
		opacity: 0;
		left: 8px;
		top: 4px;
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
</style>
