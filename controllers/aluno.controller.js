const alunoModel = require('../models/aluno.model');

function listar(resquest, response) {

    const alunos = alunoModel.listarAlunos();

    response.json(alunos)
}

module.exports = {
    listar
}