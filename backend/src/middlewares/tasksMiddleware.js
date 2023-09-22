const tasksModel = require('../models/tasksModel');

const validateParamsToCreateTask = (req, res, next) => {
    const { body } = req;
    var messages = [];

    if(body.title === undefined) 
       messages.push('O campo title é obrigatório');

    if(body.title === "")
        messages.push('O campo title não pode ser vazio');

    if(messages.length > 0)
        return res.status(400).json(messages);

    next();
};

const validateParamsToUpdateTask = async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;
    var messages = []

    const existe = await tasksModel.existsById(id);
    if(!existe){
        messages.push(`A tarefa com id ${id} não existe`);
        return res.status(404).json(messages);
    }

    if(body.title === undefined)
        messages.push('O campo title é obrigatório');
 
    if(body.title === "")
        messages.push('O campo title não pode ser vazio');

    if(body.status === undefined)
        messages.push('O campo status é obrigatório');
 
    if(body.status === "")
        messages.push('O campo status não pode ser vazio');

    if(body.status !== 'PENDENTE' && body.status !== 'CONCLUIDO')
        messages.push('O campo status aceita somente os valores \'PENDENTE\' e \'CONCLUIDO\'');

    if(messages.length > 0)
        return res.status(400).json(messages);

    next();
}

module.exports = {
    validateParamsToCreateTask,
    validateParamsToUpdateTask
};