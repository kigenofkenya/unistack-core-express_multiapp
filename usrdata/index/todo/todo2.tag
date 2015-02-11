  <textarea id="todos">
  <h3>Add List/Remove Empty</h3>
    <form onsubmit="{ add }">
      <input name="input" onkeyup="{ edit }">
      <button __disabled="{ !text }">Add</button>
      <button __disabled="{ canRemove() }" class="remove" onclick="{ remove }" title="Remove empty lists">x</button>
    </form>
    <todo each="{ todos }"></todo>
  </textarea>