<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { todos } from "$lib/stores";
	import type { Todo } from "$lib/stores";
	import { flip } from 'svelte/animate';

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
	<input
		placeholder="add task"
		class="new-task"
		on:keydown={(e) => {
			if (e.key === "Enter") addTodo(todoText);
		}}
		on:blur={() => addTodo(todoText)}
		bind:value={todoText}
	/>

	{#if $todos.length === 0}
		<p>You haven't added any tasks yet</p>
	{:else}
		{#each $todos as todo (todo.id)}
			<li animate:flip="{{duration: 200}}">
				<label class="checkbox">
					<input
						type=checkbox
						checked={todo.checked}
						on:change={() => toggleChecked(todo)}
					/>
					<span class="checkmark" />
				</label>
				<span
					class="todo-text"
					contenteditable="true"
					on:blur={() => updateTodo(todo, todo.text)}
					bind:textContent={todo.text}
					class:checked={todo.checked} />

				<button
					class="icon-button delete-button"
					aria-label="Delete todo"
					on:click={() => deleteTodo(todo)}
				>
				</button>
			</li>
		{/each}
	{/if}
</div>

<style>
	.todos {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}

	.new-task {
		border: none;
		padding: 0;
		width: 100%;
		outline: none;
	}

	li {
		display: flex;
		position: relative;
		gap: var(--padding);
	}

	.todo-text {
		position: relative;
	}

	.delete-button {
		position: absolute;
		background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15'%3E%3Cpath fill='%2337352f' d='M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z'%3E%3C/path%3E%3C/svg%3E");
		top: 3px;
		right: 0;
		width: 1em;
		height: 100%;
		opacity: 0;
		transition: opacity 250ms;
	}

	li:hover .delete-button {
		opacity: 1;
	}

	.todo-text::before {
		content: "";
		position: absolute;
		top: 50%;
		height: 2px;
		background-color: rgba(var(--text-codes), 0.75);
		width: 0;
		transition: width 0.25s;
		will-change: width;
	}

	.todo-text.checked::before {
		width: 100%;
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

	.checkbox:hover .checkmark:after,
	.checkbox:active .checkmark:after {
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
