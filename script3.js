// Get references to the input, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage or initialize an empty array if none exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks in the task list
function renderTasks() {
  taskList.innerHTML = ''; // Clear the current task list
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : ''; // Set class based on completion

    const checkbox = document.createElement('input'); // Create a checkbox
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed; // Set checkbox state
    checkbox.addEventListener('change', () => toggleTask(index)); // Add change event listener

    const span = document.createElement('span'); // Create a span for task text
    span.textContent = task.text;

    const deleteBtn = document.createElement('button'); // Create a delete button
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', () => deleteTask(index)); // Add click event listener

    li.appendChild(checkbox); // Append checkbox to list item
    li.appendChild(span); // Append span to list item
    li.appendChild(deleteBtn); // Append delete button to list item

    taskList.appendChild(li); // Append list item to task list
  });
}

// Function to add a new task
function addTask() {
  const text = taskInput.value.trim(); // Get and trim the input value
  if (text === '') { // Check if the input is empty
    alert('Please enter a task!');
    return;
  }

  tasks.push({ text, completed: false }); // Add new task to the tasks array
  taskInput.value = ''; // Clear the input field
  saveTasks(); 
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the tasks array
  saveTasks(); // Save tasks to localStorage
  renderTasks(); // Render the updated task list
}

// Function to toggle the completion state of a task
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed; // Toggle the completed state
  saveTasks(); // Save tasks to localStorage
  renderTasks(); // Render the updated task list
}

// Add click event listener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Add keydown event listener to the input field for the Enter key
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

// Initial render of the task list
renderTasks();