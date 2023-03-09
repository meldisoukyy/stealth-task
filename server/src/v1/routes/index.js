const express = require('express');
const { tasksRoutes } = require('./tasksRoutes');
const router = express.Router();

router.use('/tasks', tasksRoutes);

module.exports = {
  v1Routes: router,
};