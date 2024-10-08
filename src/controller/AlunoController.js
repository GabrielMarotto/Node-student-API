let alunos = [
    {id: 1, nome:"A", nota1: 8, nota2: 5}
];


class AlunoController{

    static cadastrarAluno( request, response) {
        const {nome, nota1, nota2} = request.body;

        if (nome == null) {
            response.status(400).json("Nome  nao informado");
            return;
        }
        if (nota1 == null || nota1 <=0 || nota1 >= 10) {
            response.status(400).json("Informe nota valida");
            return;
        }
        if (nota2 == null || nota2 <=0 || nota2 >= 10) {
            response.status(400).json("Informe nota valida");
            return;
        }

        let media = (nota1 + nota2) / 2;
        let situacao;

        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 4 && media < 7) {
            situacao = "Recuperacao";
        } else {
            situacao = "Reprovado";
        }

        let aluno = {
            id: alunos.at(-1).id + 1,
            nome,
            nota1,
            nota2,
            media,
            situacao
        };

        alunos.push(aluno);
        response.status(200).json({aluno});
    }

    static listarAlunos( request, response) {
        response.status(200).json({alunos: alunos});
    }

    static alterarDados (request,response) {
        const {id} = request.params;
        const {nome, nota1, nota2, media, situacao} = request.body;

        const alunoIndex = alunos.findIndex((aluno) => aluno.id === parseInt(id));

        if (alunoIndex == -1) {
            response.status(400).json("Aluno nao encontrado");
            return;
        }

        alunos[alunoIndex] = {nome,nota1,nota2,media,situacao};
        response.status(200).json({aluno: alunos[alunoIndex]});
    }

    static deletarAluno (request, response) {
        const {id} = request.params;
        const alunoIndex = alunos.findIndex((aluno) => aluno.id === parseInt(id));

        if (alunoIndex == -1) {
            response.status(400).json("Aluno nao encontrado");
            return;
        }

        alunos.splice(alunoIndex, 1);
        response.status(200).json("Aluno deletado");
    }

    static listarPorId (request, response) {
        const {id} = request.params;
        const alunoIndex = alunos.findIndex((aluno) => aluno.id === parseInt(id));

        if (alunoIndex == -1) {
            response.status(400).json("Aluno nao encontrado");
            return;
        }

        response.status(200).json({aluno: alunos[alunoIndex]});
    }
}

export default AlunoController;
