<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { writable } from "svelte/store";

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
			user: $data.user ? $data.user.id : "",
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
/*
		todos.update((items) => [
		  ...items.filter((item) => item.checked === false),
		  ...items.filter((item) => item.checked === true),
		].map((item) => (item.id === todo.id ? updatedTodo : item)))
*/
		await pb.collection("todos").update(todo.id, { checked: !todo.checked });
	}

	export let className: string;
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
				<button class="icon-button" on:click={() => deleteTodo(todo)}>
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

<style>

.todo {
  display: flex;
  justify-content: space-between;
  padding: calc(var(--padding) / 4) 0;
}

.todo-text {
  padding: 0 var(--padding);
  width: 100%;
  position: relative;
}

span {
	word-break: keep-all;
}

.todo-text::before {
  content: "";
  position: absolute;
  left: calc(var(--padding) - 4px);
  top: 50%;
  height: 2px;
  background-color: rgba(var(--text-codes), 0.75);
  width: 0;
  transition: width 0.25s;
  will-change: width;
}

.todo-text.checked::before {
  width: calc(100% - var(--padding) * 2);
}

.checkbox {
  display: inline-block;
  position: relative;
  min-width: 24px;
  height: 24px;
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
  cursor: pointer;
}

.checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid var(--text);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox input[type="checkbox"]:checked ~ .checkmark:after {
  display: block;
}
</style>
