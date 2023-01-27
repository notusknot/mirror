<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { currentUser, pb } from './pocketbase';

  let todoText: string;
  let todoCompleted: bool;
  let todos = [];
  let unsubscribe: () => void;

  onMount(async () => {
    // Get initial items
    const resultList = await pb.collection('todos').getList(1, 50, {
      sort: 'created',
      expand: 'user',
    });
    todos = resultList.items;
    // Subscribe to realtime todos
    unsubscribe = await pb
      .collection('todos')
      .subscribe('*', async ({ action, record }) => {
        if (action === 'create') {
          // Fetch associated user
          const user = await pb.collection('users').getOne(record.user);
          record.expand = { user };
          todos = [...todos, record];
        }
        if (action === 'delete') {
          todos = todos.filter((m) => m.id !== record.id);
        }
      });
  });

  onDestroy(() => {
    unsubscribe?.();
  });

  async function addTodo() {
    const data = {
      text: todoText,
      checked: true,
      user: $currentUser.id,
    };
    const createdTodo = await pb.collection('todos').create(data);
    todoText = '';
  }

  async function deleteTodo(todo) {
    const deletedTodo = await pb.collection('todos').delete(todo.id);
  }
</script>

<div>
  <ul>
  {#each todos as todo (todo.id)}
    <li> 
    {todo.text} 
    <button on:click={deleteTodo(todo)}>x</button>
    <input type="checkbox" bind:checked={todoCompleted}>
    </li>
  {/each}
  </ul>
</div>

<form on:submit|preventDefault={addTodo}>
  <input placeholder="add something" type="text" bind:value={todoText} />
  <button type="submit">+</button>
</form>