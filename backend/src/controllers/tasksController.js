const tasksModel = require('../models/tasksModel')

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const updateTask = async(req, res) => {
    const { id } = req.params;
    const taskInfo = req.body;

    updatedTask = await tasksModel.updateTask(id, taskInfo);
    return res.status(204).json(updatedTask);
}

const deleteTask = async(req, res) => {
    const { id } = req.params;
    deletedTask = await tasksModel.deleteTask(id);
    return res.status(204).json(deletedTask);
}

module.exports = {
    getAll,
    createTask,
    updateTask,
    deleteTask,
};