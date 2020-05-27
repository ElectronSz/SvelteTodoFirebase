<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
</script>

<style>

</style>

<td>{id}</td>
<td>{text}</td>
<td>

  {#if complete}
    <button on:click={toggleStatus}>✔️</button>
  {:else}
    <button on:click={toggleStatus}>❌</button>
  {/if}

  <button on:click={remove}>🗑</button>

</td>
