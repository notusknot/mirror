<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { currentUser, pb } from '$lib/pocketbase';
import { writable } from 'svelte/store';
type Journal = {
  id: string;
  text: string;
  user: string;
  created: Date;
};
let journalText: string;
let journals = writable<Journal[]>([]);
let unsubscribe: () => void;
onMount(async () => {
  // Get initial items
  const resultList = await pb.collection('journals').getList(1, 50, {
    sort: 'created',
  });
  journals.set(resultList.items as unknown as Journal[]);
  unsubscribe = await pb
    .collection('journals')
    .subscribe('*', async ({ action, record }) => {
      if (action === 'create') {
        journals.update((items) => [...items, record as unknown as Journal]);
      }
      if (action === 'delete') {
        journals.update((items) => items.filter((item) => item.id !== record.id));
      }
    });
});
onDestroy(() => {
  unsubscribe?.();
});
async function addJournal() {
  if (!journalText) {
    return;
  }
  const data = {
    text: journalText,
    user: $currentUser ? $currentUser.id : '',
  };
  await pb.collection('journals').create(data);
  console.log(journalText);
  journalText = '';
}
async function deleteJournal(journal: Journal) {
  await pb.collection('journals').delete(journal.id);
}
const journalEntries = getJournalEntries(journals as unknown as Journal[]);
</script>
{#each Object.entries(journalEntries) as [date, journalArray]}
  <div class="journal-date">{date}</div>
  {#each journalArray as journal (journal.id)}
    <div class="journal">
      <span class="journal-text">{journal.text}</span>
      <span class="date">{journal.created.toLocaleString()}</span>
      <button on:click={() => deleteJournal(journal)}>x</button>
    </div>
  {/each}
{/each}
<form on:submit|preventDefault={addJournal}>
  <input placeholder="add journal" type="text" bind:value={journalText} on:blur={addJournal} />
</form>