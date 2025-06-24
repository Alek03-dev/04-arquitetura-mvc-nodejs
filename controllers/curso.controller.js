const cursoModel = require('../models/curso.model');

function listar(resquest, response) {
    // Retornar a minha lista de cursos

    // Chamar a função dp model que lista os cursos
    const cursos = cursoModel.listarCursos();

    // Retornar a resposta para o cliente
    response.json(cursos)
}

module.exports = {
    listar
}