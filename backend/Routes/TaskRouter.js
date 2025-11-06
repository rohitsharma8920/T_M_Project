const router = require('express').Router();
const {createTask, fatchAllTask, updateTaskById, deleteTaskById} = require('../Controllers/TaskController')

//to get all the task
router.get('/',fatchAllTask)

//to create a task
router.post('/', createTask);

//to update a task
router.put('/:id', updateTaskById);

//to delete a task
router.delete('/:id', deleteTaskById);
module.exports = router;