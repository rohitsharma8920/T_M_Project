const TaskModel = require("../Models/TaskModel");

// Create Task
const createTask = async (req, res) => {
  const data = req.body;
  try {
    const model = new TaskModel(data);
    await model.save();
    res.status(201).json({ message: 'Task is created', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task', success: false, error: err.message });
  }
};

// Fetch All Tasks
const fatchAllTask = async (req, res) => {
  try {
    const model = await TaskModel.find({});
    res.status(200).json({ message: 'All tasks fetched', success: true, data: model });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get all tasks', success: false, error: err.message });
  }
};

// Update Task
const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const obj = { $set: { ...body } };
    await TaskModel.findByIdAndUpdate(id, obj);
    res.status(200).json({ message: 'Task updated', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task', success: false, error: err.message });
  }
};

// Delete Task
const deleteTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    await TaskModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task is deleted', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task', success: false, error: err.message });
  }
};

module.exports = {
  createTask,
  fatchAllTask,
  updateTaskById,
  deleteTaskById
};
