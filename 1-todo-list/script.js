function todoList(todos) {
  const contentDiv = document.getElementById("content");

  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";

  todos.forEach((task) => {
    const taskElement = document.createElement("p");
    taskElement.textContent = task.todo;
    taskElement.className = "todo-item";

    taskElement.addEventListener("click", () => {
      taskElement.classList.toggle("completed");
    });

    todoContainer.appendChild(taskElement);
  });

  contentDiv.appendChild(todoContainer);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
