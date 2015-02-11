  <textarea id="todotag">
    <h3>{ parent.title }</h3>

    <ul class="item">
      <li each="{ items }">
        <label class="{ completed: done }">
          <input type="checkbox" __checked="{ done }" onclick="{ parent.toggle }">{ title }
        </label>
      </li>
    </ul>

    <form onsubmit="{ add }">
      <input name="input" onkeyup="{ edit }">
      <button __disabled="{ !text }">Add #{ items.length + 1 }</button>
      <button  __disabled="{ canRemove() }" class="remove" onclick="{ remove }" title="Remove completed items">x</button>
    </form>
  </textarea>