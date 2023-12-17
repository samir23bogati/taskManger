let tasks = [];
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Task: ${task.name}, Priority: ${task.priority}, Completed: ${task.completed ? 'Yes' : 'No'}`;
        taskList.appendChild(listItem);
    });}
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('priority').value || 1;
    if (taskName.trim() !== '') {
        const newTask = { name: taskName, priority: parseInt(priority), completed: false };
        tasks.push(newTask);
        renderTasks();
    } else {
        alert('Please enter a valid task name.!!');
    }}
function deleteTask() {
    const taskName = document.getElementById('taskName').value;

    if (taskName.trim() !== '') {
        tasks = tasks.filter(task => task.name !== taskName);
        renderTasks();
    } else {
        alert('Please enter a valid task name.!!');
    }}
function prioritizeTasks() {
    tasks.sort((a, b) => b.priority - a.priority);
    renderTasks();
}
function markTaskCompleted() {
    const taskName = document.getElementById('taskName').value;
    if (taskName.trim() !== '') {
        const task = tasks.find(task => task.name === taskName);
        if (task) {
            task.completed = true;
            renderTasks();
        } else {
            alert('Task not found.');
     }} else {
        alert('Please enter a valid task name.!!');
    }}
renderTasks();
