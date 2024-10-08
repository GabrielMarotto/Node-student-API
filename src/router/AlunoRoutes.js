import { Router } from "express";
import AlunoController from "../controller/AlunoController.js";

const router = Router();

router.post('/alunos/', AlunoController.cadastrarAluno);
router.get('/alunos/', AlunoController.listarAlunos);
router.put('/alunos/:id', AlunoController.alterarDados);
router.delete('/alunos/:id', AlunoController.deletarAluno);
router.get('/alunos/:id', AlunoController.listarPorId);


export default router;
