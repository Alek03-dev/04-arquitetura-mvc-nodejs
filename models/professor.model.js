function listarProfessor() {
    const professores = [
        { id: 1, nome: "Kaique Covo", curso: "Tecnico em informática", grau:"Professor"},
        { id: 2, nome: "Everton", curso: "Tecnico em Administração", grau:"Professor"},
        { id: 3, nome: "Eduardo", curso: "Tecnico em Segurança do trabalho", grau:"Professor"}
    ]

    return professores;
}

module.exports = {
    listarProfessor
}