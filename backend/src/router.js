const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleWare = require('./middlewares/tasksMiddleware');
const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleWare.validateParamsToCreateTask, tasksController.createTask);
router.put('/tasks/:id',tasksMiddleWare.validateParamsToUpdateTask, tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;