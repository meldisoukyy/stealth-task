const taskModel = require('../models/task');

const getTasks = (req, res) => {
  res.send(taskModel.getTasks());
};

const createTask = (req, res) => {
  const task = req.body;
  taskModel.addTask(task);
  res.sendStatus(200);
};

const retrieveTask = (req, res) => {
  const id = req.params.id;
  res.send(taskModel.getTask(id));
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const task = req.body;
  taskModel.updateTask(id, task);
  res.sendStatus(200);
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  taskModel.deleteTask(id);
  res.sendStatus(200);
};

module.exports = {
  getTasks,
  createTask,
  retrieveTask,
  updateTask,
  deleteTask
};