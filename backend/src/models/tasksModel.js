const connection = require('./connection');
const getAll = async () => {
    const [tasks] = await connection.execute(
        'SELECT * FROM tasks'
    );

    return tasks;
};

const createTask = async (task) => {
    const { title } = task;
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    const dateUTC = new Date(Date.now()).toUTCString();
    const [createdTask] = await connection.execute(
        query, [title, 'PENDENTE', dateUTC]
    );

    return {insertId: createdTask.insertId}; 
};

const updateTask = async (id, taskInfo) => {
    const {title, status} = taskInfo;
    const queryUpdate = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    
    const [updatedTask] = await connection.execute(
        queryUpdate, [title, status, id]
    );

    return updatedTask;
};

const deleteTask = async (id) => {
    const queryDelete = 'DELETE from tasks WHERE id = ?';
    [deletedTask] = await connection.execute(queryDelete, [id]);

    return deletedTask;
};

const existsById = async (id) => {
    const queryExists = `SELECT count(*) AS 'exists' FROM tasks WHERE ID = ?`;
    const [[taskExists]] = await connection.execute(queryExists, [id]);

    return  (taskExists.exists == 1) ? true : false;
};

module.exports = {
    getAll,
    createTask,
    updateTask,
    deleteTask,
    existsById
};