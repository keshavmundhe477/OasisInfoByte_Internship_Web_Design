// Get elements
const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasks');

// Add task event listener
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get task values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Create task element
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
    taskItem.appendChild(taskContent);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        tasksContainer.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);

    // Add task to the container
    tasksContainer.appendChild(taskItem);

    // Clear form
    taskForm.reset();
});
