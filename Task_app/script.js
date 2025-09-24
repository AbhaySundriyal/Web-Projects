function addTask(columnId) {
  const taskText = prompt('Enter task description:');
  if (taskText) {
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = taskText;
    document.querySelector(`#${columnId} .tasks`).appendChild(task);
  }
}

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
