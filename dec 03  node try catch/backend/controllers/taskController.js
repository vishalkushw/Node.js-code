const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const task = await Task.create({ user: req.user.id, title, description, dueDate, priority });
  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task || task.user.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task || task.user.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Task not found' });
  }

  await task.remove();
  res.json({ message: 'Task removed' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };