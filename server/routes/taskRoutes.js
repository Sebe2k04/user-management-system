const express = require('express');
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask); // Create a task
router.get('/', getAllTasks); // Get all tasks
router.put('/:id', updateTask); // Update a task
router.delete('/:id', deleteTask); // Delete a task

module.exports = router;
