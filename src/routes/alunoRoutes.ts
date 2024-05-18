import { Router } from 'express';
import { addAluno, getAlunos, getAluno, editAluno, patchAluno, deleteAluno } from '../controllers/alunoController';

const router = Router();

router.post('/alunos', addAluno);
router.get('/alunos', getAlunos);
router.get('/alunos/:id', getAluno);
router.put('/alunos/:id', editAluno);
router.patch('/alunos/:id', patchAluno);
router.delete('/alunos/:id', deleteAluno);

export default router;
