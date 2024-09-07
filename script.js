document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const task = document.getElementById('user-input').value;
    if (task.trim() !== '') { // Only add the task if it's not empty
        let information = `<li>${task} <button style="height: fit-content; width: fit-content;" onClick="removeTask(this)">✔️</button></li>`;
        document.getElementById('information').innerHTML += information;
        document.getElementById('user-input').value = ''; // Clear the input field
    }
});

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove(); // Remove the task item from the list
}
