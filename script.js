const button = document.querySelector("#addItem");
const list = document.querySelector("#todoList");
const textbox = document.querySelector("#textbox");

button.addEventListener("click", () => {
  const itemName = textbox.value;
  textbox.value = "";
  const newItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  newItem.appendChild(checkbox);
  let id;
  checkbox.addEventListener("click", () => {
    if (newItem.classList.contains("strikethrough")) {
      clearTimeout(id);
    } else {
      id = setTimeout(() => list.removeChild(newItem), 3000);
    }
    newItem.classList.toggle("strikethrough");
  });

  const itemContent = document.createTextNode(itemName);
  newItem.appendChild(itemContent);
  list.appendChild(newItem);
});

textbox.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
