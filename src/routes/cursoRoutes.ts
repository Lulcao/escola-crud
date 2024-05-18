import { Router } from 'express';
import { addCurso, getCursos, getCurso, editCurso, patchCurso, deleteCurso } from '../controllers/cursoController';

const router = Router();

router.post('/cursos', addCurso);
router.get('/cursos', getCursos);
router.get('/cursos/:id', getCurso);
router.put('/cursos/:id', editCurso);
router.patch('/cursos/:id', patchCurso);
router.delete('/cursos/:id', deleteCurso);

export default router;
