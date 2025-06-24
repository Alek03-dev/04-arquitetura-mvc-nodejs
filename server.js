// Importando o módulo express
const express = require('express');

// Importando os controllers
 const cursoController = require('./controllers/curso.controller')

const app = express();

// Rota para listar cursos
app.get('/listar-cursos', cursoController.listar)

// Definindo a posta do servidor
app.listen(3000, function() {
    console.log('Servidor está rodando com sucesso')
})