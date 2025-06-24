const professorModel = require('../models/professor.model');

function listar(resquest, response) {
    
    const professor = professorModel.listarProfessor();
    
    response.json(professor)
}

module.exports = {
    listar
}