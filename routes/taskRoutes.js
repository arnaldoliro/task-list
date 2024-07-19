const express = require('express')
const router = express.Router()

const TaskController = require('/Users/Dinho/Desktop/Backend Estudo/Sprint 5 TITAN/mvc/controllers/TaskController')

router.get('/tasks/create', TaskController.createTask)
router.post('/tasks/create', TaskController.createTaskSave)
router.post('/tasks/delete', TaskController.removeTask)
router.get('/tasks/edit/:id', TaskController.updateTask)
router.post('/tasks/edit', TaskController.updateTaskPost)
router.post('/tasks/toggle', TaskController.toggleTaskStatus)
router.get('/tasks', TaskController.showTasks)

module.exports = router