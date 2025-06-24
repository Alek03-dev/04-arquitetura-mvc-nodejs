// CRUD 
/**
 *  C - Create (Criar) - POST - INSERT INTO
 *  R - Read (Ler) - GET - SELECT
 *  U - update (Atualizar) - PUT - UPDATE
 *  D - Delete (Deletar) - DELETE - DELETE FROM
 */


/**
 * Tabela: cursos
 * Coluna: id, nome, duracao, descricao
 * Exemplo de dados:
*/
function listarCursos() {
    const cursos = [
        { id: 1, nome: "Técnico em informática", duracao: 1200, descricao: "Curso focado em programação e manutenção de computadores"},
        { id: 2, nome: "Técnico em Administração", duracao: 1100, descricao: "Curso focado em administração financeira e de empresas"},
        { id: 3, nome: "Técnico em Segurança do trabalho", duracao: 1000, descricao: "Curso focado em NRs de segurança do trabalho"},
    ]

    return cursos;
}

module.exports = {
    listarCursos
}
