// Get form and task list elements
const form = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");

// Add task event listener
form.addEventListener("submit", addTask);

// Function to add a new task
function addTask(e) {
    e.preventDefault();

    // Get task input value
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create new task element
        const newTask = document.createElement("li");
        newTask.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

        // Add task to task list
        taskList.appendChild(newTask);

        // Clear task input
        taskInput.value = "";

        // Add delete event listener to the delete button
        const deleteBtn = newTask.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteTask);
    }
}

// Function to delete a task
function deleteTask(e) {
    const task = e.target.parentElement;
    task.remove();
}
