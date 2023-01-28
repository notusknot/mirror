<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { currentUser, pb } from '$lib/pocketbase';

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
  <div class="checklist">
  {#each todos as todo (todo.id)}

    <input id="checkbox" bind:checked={todoCompleted} type="checkbox" name="r" >
    <label for="checkbox">{todo.text}</label>
    <!-- <button on:click={deleteTodo(todo)}>x</button> -->
  {/each}
  </div>
</div>

<form on:submit|preventDefault={addTodo}>
  <input placeholder="add something" type="text" bind:value={todoText} />
  <button type="submit">+</button>
</form>

<style>

:root {
	 --background: #fff;
	 --text: #414856;
	 --check: #4f29f0;
	 --disabled: #c3c8de;
	 --width: 100px;
	 --height: 140px;
	 --border-radius: 10px;
}
 .checklist {
	 background: var(--background);
	 width: var(--width);
	 height: var(--height);
	 border-radius: var(--border-radius);
	 position: relative;
	 box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
	 padding: 30px 45px;
	 display: grid;
	 grid-template-columns: 30px auto;
	 align-items: center;
}
 .checklist label {
	 color: var(--text);
	 position: relative;
	 cursor: pointer;
	 display: grid;
	 align-items: center;
	 width: fit-content;
	 transition: color 0.3s ease;
}
 .checklist label::before, .checklist label::after {
	 content: "";
	 position: absolute;
}
 .checklist label::before {
	 height: 2px;
	 width: 8px;
	 left: -27px;
	 background: var(--check);
	 border-radius: 2px;
	 transition: background 0.3s ease;
}
 .checklist label:after {
	 height: 4px;
	 width: 4px;
	 top: 8px;
	 left: -25px;
	 border-radius: 50%;
}
 .checklist input[type="checkbox"] {
	 -webkit-appearance: none;
	 -moz-appearance: none;
	 position: relative;
	 height: 15px;
	 width: 15px;
	 outline: none;
	 border: 0;
	 margin: 0 15px 0 0;
	 cursor: pointer;
	 background: var(--background);
	 display: grid;
	 align-items: center;
}
 .checklist input[type="checkbox"]::before, .checklist input[type="checkbox"]::after {
	 content: "";
	 position: absolute;
	 height: 2px;
	 top: auto;
	 margin-top: 2px;
	 background: var(--check);
	 border-radius: 2px;
}
 .checklist input[type="checkbox"]::before {
	 width: 0px;
	 right: 85%;
	 transform-origin: right bottom;
}
 .checklist input[type="checkbox"]::after {
	 width: 0px;
	 left: 15%;
	 transform-origin: left bottom;
}
 .checklist input[type="checkbox"]:checked::before {
	 animation: check-01 0.4s ease forwards;
}
 .checklist input[type="checkbox"]:checked::after {
	 animation: check-02 0.4s ease forwards;
}
 .checklist input[type="checkbox"]:checked + label {
	 color: var(--disabled);
	 animation: move 0.3s ease 0.1s forwards;
}
 .checklist input[type="checkbox"]:checked + label::before {
	 background: var(--disabled);
	 animation: slice 0.4s ease forwards;
}
 .checklist input[type="checkbox"]:checked + label::after {
	 animation: firework 0.5s ease forwards 0.1s;
}
 @keyframes move {
	 50% {
		 padding-left: 8px;
		 padding-right: 0px;
	}
	 100% {
		 padding-right: 4px;
	}
}
 @keyframes slice {
	 60% {
		 width: 100%;
		 left: 4px;
	}
	 100% {
		 width: 100%;
		 left: -2px;
		 padding-left: 0;
	}
}
 @keyframes check-01 {
	 0% {
		 width: 4px;
		 top: auto;
		 transform: rotate(0);
	}
	 50% {
		 width: 0px;
		 top: auto;
		 transform: rotate(0);
	}
	 51% {
		 width: 0px;
		 top: 8px;
		 transform: rotate(45deg);
	}
	 100% {
		 width: 5px;
		 top: 8px;
		 transform: rotate(45deg);
	}
}
 @keyframes check-02 {
	 0% {
		 width: 4px;
		 top: auto;
		 transform: rotate(0);
	}
	 50% {
		 width: 0px;
		 top: auto;
		 transform: rotate(0);
	}
	 51% {
		 width: 0px;
		 top: 8px;
		 transform: rotate(-45deg);
	}
	 100% {
		 width: 10px;
		 top: 8px;
		 transform: rotate(-45deg);
	}
}
 @keyframes firework {
	 0% {
		 opacity: 1;
		 box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
	}
	 30% {
		 opacity: 1;
	}
	 100% {
		 opacity: 0;
		 box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;
	}
}
 </style>
