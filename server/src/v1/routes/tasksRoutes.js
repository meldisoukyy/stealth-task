const express = require('express');
const {
  getTasks,
  createTask,
  retrieveTask,
  updateTask,
  deleteTask }
  = require('../controllers/tasksController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', retrieveTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = {
  tasksRoutes: router
};