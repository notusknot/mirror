<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { currentUser, pb } from '$lib/pocketbase';

  let todoText: string;
  let todos = [];
  let unsubscribe: () => void;

  onMount(async () => {
    // Get initial items
    const resultList = await pb.collection('todos').getList(1, 50, {
      sort: 'created',
      expand: 'user',
    });
    todos = resultList.items;
    unsubscribe = await pb
      .collection('todos')
      .subscribe('*', async ({ action, record }) => {
        if (action === 'create') {
          const user = await pb.collection('users').getOne(record.user);
          record.expand = { user };
          todos = [...todos, record];
        }
        if (action === 'delete') {
          todos = todos.filter((item) => item.id !== record.id);
        }
        if (action === 'update') {
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
      user: $currentUser.id,
    };
    await pb.collection('todos').create(data);
    todoText = '';
  }

  async function deleteTodo(todo: any) {
    await pb.collection('todos').delete(todo.id);
  }

  async function toggleChecked(todo: any) {
    const update = await pb.collection('todos').update(todo.id, {checked: !todo.checked});    
  }
</script>

<div>
  {#each todos as todo (todo.id)}
		<div class="todo">
		    <input type="checkbox" id="checkbox" checked={todo.checked} on:change={toggleChecked(todo)} />
		    <span class:checked={todo.checked}>{todo.text}</span>
	    <button on:click={deleteTodo(todo)}>x</button>
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

/*
.checked {
  text-decoration: line-through;
}
*/

form {
	padding: var(--padding) calc(var(--padding) * 2);
}

form input {
	width: 100%;
}
</style>
