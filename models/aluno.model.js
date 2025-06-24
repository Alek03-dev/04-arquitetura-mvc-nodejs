function listarAlunos() {
    const alunos = [
        { id: 1, nome: "Aleksander Piassalonga", nascimento: "14/03/2003", curso: "Tecnico em informática", grau:"Aluno"},
        { id: 2, nome: "Maria Clara", nascimento: "10/06/2004", curso: "Tecnico em Administração", grau:"Aluno"},
        { id: 3, nome: "Allan Teixeira", nascimento: "21/03/2002", curso: "Tecnico em Segurança do trabalho", grau:"Aluno"}
    ]

    return alunos;
}

module.exports = {
    listarAlunos
}