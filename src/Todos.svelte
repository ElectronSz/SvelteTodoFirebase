<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Form Text
  let text = "some task";

  // Query requires an index, see screenshot below
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });
    text = "";
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<style>

</style>

<div class="row">
  <div class="col-md-9">
    <input class="form-control" bind:value={text} />
  </div>
  <div class="col-md-3">
    <button class="btn btn-success btn-block" on:click={add}>Add Task</button>
  </div>

  <div class="col-md-12">
    <table class="table">
      <th>ID</th>
      <th>Task</th>
      <th>Action</th>

      {#each $todos as todo}
        <tr>
          <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        </tr>
      {/each}

    </table>
  </div>
</div>
