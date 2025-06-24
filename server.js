// Importando o módulo express
const express = require('express');

// Importando os controllers
 const cursoController = require('./controllers/curso.controller')
 const professorController = require('./controllers/professor.controller')
 const alunoController = require('./controllers/aluno.controller')

const app = express();

// Rota para listar cursos
app.get('/listar-cursos', cursoController.listar)

app.get('/listar-alunos', alunoController.listar)

app.get('/listar-professor', professorController.listar)

// Definindo a posta do servidor
app.listen(3000, function() {
    console.log('Servidor está rodando com sucesso')
})