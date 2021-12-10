function AddPost() {
  let val = document.getElementById('input').value;

  if (!val.trim().length) {
    return
  }

  document.getElementById('list').innerHTML =
    document.getElementById('list').innerHTML + `<li>${val}
    <button onclick="RemovePost()"><img src="remove.png" alt=""></button>
  </li>`
}

function RemovePost() {
  document.getElementById('list').innerHTML = ``
}