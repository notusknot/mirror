<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { currentUser, pb } from '$lib/pocketbase';
import { writable } from 'svelte/store';

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
  const resultList = await pb.collection('todos').getList(1, 50, {
    sort: 'created',
  });
  todos.set(resultList.items as unknown as Todo[]);
  unsubscribe = await pb
    .collection('todos')
    .subscribe('*', async ({ action, record }) => {
      if (action === 'create') {
        todos.update((items) => [...items, record as unknown as Todo]);
      }
      if (action === 'delete') {
        todos.update((items) => items.filter((item) => item.id !== record.id));
      }
      if (action === 'update') {
        const resultList = await pb.collection('todos').getList(1, 50, {
          sort: 'created',
        });
        todos.set(resultList.items as unknown as Todo[]);
      }
    });
});

onDestroy(() => {
  unsubscribe?.();
});

async function addTodo() {
  const data = {
    text: todoText,
    checked: false,
    user: $currentUser ? $currentUser.id : '',
  };
  await pb.collection('todos').create(data);
  todoText = '';
}

async function deleteTodo(todo: Todo) {
  await pb.collection('todos').delete(todo.id);
}

async function toggleChecked(todo: Todo) {
  const updatedTodo = {...todo, checked: !todo.checked};
  todos.update(items => items.map(item => item.id === todo.id ? updatedTodo : item));
  await pb.collection('todos').update(todo.id, {checked: !todo.checked});}
</script>

<div>
  {#each $todos as todo (todo.id)}
		<div class="todo">
        <label class="checkbox">
  		    <input type="checkbox" checked={todo.checked} on:change={() => toggleChecked(todo)} />
          <span class="checkmark"></span>
        </label>
		    <span class="todo-text" class:checked={todo.checked}>{todo.text}</span>
	    <button on:click={() => deleteTodo(todo)}>x</button>
		</div>
  {/each}
</div>

<form on:submit|preventDefault={addTodo}>
  <input placeholder="add something" type="text" bind:value={todoText} on:blur={addTodo} />
</form>

<style>
.todo {
	display: flex;
  justify-content: space-between;
  padding: calc(var(--padding) / 4) 0;
}

.todo-text {
  padding: 0 var(--padding);
  width: 100%;
}

button {
  padding: 0px;
  min-width: 24px;
  height: 24px;
  border: none;
  background-color: var(--bg);
}

.checkbox {
  display: inline-block;
  position: relative;
  min-width: 24px;
  height: 24px;
  border: 3px solid var(--text);
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.checkbox:hover, .checkbox:active {
  border: 3px solid var(--accent);
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
}

.checkbox input[type="checkbox"]:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid var(--text);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checked {
  text-decoration: line-through;
}


form {
	padding: var(--padding) calc(var(--padding) * 2);
}

form input {
	width: 100%;
}
</style>
