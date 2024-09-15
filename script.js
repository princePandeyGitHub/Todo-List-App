// by chat gpt
// Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const task = document.getElementById('user-input').value;
    if (task.trim() !== '') { // Only add the task if it's not empty
        addTask(task);
        saveTask(task); // Save the task in localStorage
        document.getElementById('user-input').value = ''; // Clear the input field
    }
});

// Add a task to the DOM
function addTask(task) {
    let information = `<li>${task} <button style="height: fit-content; width: fit-content;" onClick="removeTask(this)">✔️</button></li>`;
    document.getElementById('information').innerHTML += information;
}

// Remove a task from the DOM and localStorage
function removeTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.textContent.replace('✔️', '').trim(); // Get the task text
    
    taskItem.remove(); // Remove the task item from the list
    
    removeTaskFromStorage(taskText); // Remove the task from localStorage
}

// Load tasks from localStorage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTask);
}

// Save a task to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove a task from localStorage
function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task); // Filter out the removed task
    localStorage.setItem('tasks', JSON.stringify(tasks));
}