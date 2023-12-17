// Data structure for tasks
let tasks = [];

// Function to render tasks in the HTML list
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Task: ${task.name}, Priority: ${task.priority}, Completed: ${task.completed ? 'Yes' : 'No'}`;
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value || 1;

    if (taskName.trim() !== '') {
        const newTask = { name: taskName, priority: parseInt(priority), completed: false };
        tasks.push(newTask);
        renderTasks();
    } else {
        alert('Please enter a valid task name.');
    }
}

// Function to delete a task
function deleteTask() {
    const taskName = document.getElementById('taskName').value;

    if (taskName.trim() !== '') {
        tasks = tasks.filter(task => task.name !== taskName);
        renderTasks();
    } else {
        alert('Please enter a valid task name.');
    }
}

// Function to prioritize tasks
function prioritizeTasks() {
    tasks.sort((a, b) => b.priority - a.priority);
    renderTasks();
}

// Function to mark a task as completed
function markTaskCompleted() {
    const taskName = document.getElementById('taskName').value;

    if (taskName.trim() !== '') {
        const task = tasks.find(task => task.name === taskName);
        if (task) {
            task.completed = true;
            renderTasks();
        } else {
            alert('Task not found.');
        }
    } else {
        alert('Please enter a valid task name.');
    }
}

// Initial rendering of tasks
renderTasks();
