let tasks = [
  {
    title: 'First Task',
    description: 'A description of the first task'
  },
  {
    title: 'Second Task',
    description: 'A description of the second task'
  }
];

const getTasks = () => {
  return tasks;
};

const addTask = (task) => {
  tasks = [...tasks, task];
  return tasks.length;
};

const getTask = (id) => {
  return tasks[id];
};

const updateTask = (id, task) => {
  tasks[id] = task;
  return;
};

const deleteTask = (id) => {
  let newTasks = tasks.slice(0, id).concat(tasks.slice(id + 1));
  tasks = newTasks;
  return;
};

module.exports = {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};