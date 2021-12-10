function AddPost() {
  let val = document.getElementById('input').value;

  if (!val.trim().length) {
    return
  }

  let elem = document.createElement("li");
  elem.innerHTML = val + `
    <button onclick="DeletePost()"><img src="remove.png" alt="" /></button>
  `;
  document.getElementById("list").appendChild(elem);
}

function DeletePost() {
  let target = event.target.closest('li');
  target.remove();
}