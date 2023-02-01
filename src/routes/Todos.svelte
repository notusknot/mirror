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
  await pb.collection('todos').update(todo.id, {checked: !todo.checked});
}
</script>

<div>
  {#each $todos as todo (todo.id)}
		<div class="todo">
		    <input type="checkbox" id="checkbox" checked={todo.checked} on:change={() => toggleChecked(todo)} />
		    <span class:checked={todo.checked}>{todo.text}</span>
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
