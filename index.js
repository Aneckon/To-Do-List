function AddPost() {
  let val = document.getElementById('input').value;
  document.getElementById('list').innerHTML = val + `<li>
    <button id="buttin__remove" onclick="RemovePost()"><img src="remove.png" alt=""></button>
  </li>`
}

function RemovePost(params) {
  document.getElementById('list').innerHTML = ``
}