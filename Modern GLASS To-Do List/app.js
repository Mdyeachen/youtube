const listValue = document.querySelector(".todo-value");
const addBtn = document.querySelector(".todo-add");
const todoList = document.querySelector(".todoList");

addBtn.addEventListener("click", () => {
  if (listValue.value.trim() !== "") {
    const newTodo = document.createElement("div");
    newTodo.classList.add("todoSingle-list");

    newTodo.innerHTML = `
        <div class="icon"><i class="fa-regular fa-circle"></i></div>
        <h3>${listValue.value}</h3>
        <div class="delete"><i class="fa-solid fa-trash"></i></div>
      `;

    todoList.appendChild(newTodo);
    listValue.value = "";
  } else {
    alert("Please enter a task");
  }
});

todoList.addEventListener("click", (e) => {
  const item = e.target;

  // Delete Logic
  if (
    item.parentElement.classList.contains("delete") ||
    item.classList.contains("delete")
  ) {
    const todo = item.closest(".todoSingle-list");
    todo.remove();
  }

  // Complete (Toggle Circle) Logic
  if (
    item.parentElement.classList.contains("icon") ||
    item.classList.contains("icon")
  ) {
    const todo = item.closest(".todoSingle-list");
    const icon = todo.querySelector(".icon i");

    todo.classList.toggle("completed"); // You can style this in CSS
    icon.classList.toggle("fa-circle");
    icon.classList.toggle("fa-circle-check");
  }
});
