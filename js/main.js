var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createListElement() {
  var li = document.createElement("li"); // creates an element "li"
  const value = input.value;
  if (value <= 0) {
    return;
  }
  // Put the code to append todo item LI element
  li.textContent = value;
  input.value = "";
  ul.appendChild(li);

  function crossOut() {
    // Put the code to mark todo item as done by clicking on it (add done class to LI tag)
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  var dBtn = document.createElement("button");
  // Put the code to append delete buttom to todo item
  dBtn.textContent = "X";

  dBtn.addEventListener("click", deleteListItem);
  function deleteListItem() {
    // Put the code for deleting todo item here
    ul.removeChild(li); // delete an element "li"
  }
  li.appendChild(dBtn);
}

function addListAfterClick() {
  // Put the code to handle add todo item by click (p)
  if (input.value === "") alert("Please entry item");
}

function addListAfterKeypress(event) {
  // Put the code to handle add todo item by enter keypress
  if (event.keyCode === 13) {
    addListAfterClick();
    createListElement();
  }

  return false;
}

enterButton.addEventListener("click", addListAfterClick);
enterButton.addEventListener("click", createListElement);

input.addEventListener("keypress", addListAfterKeypress);
