import { Request, Response } from 'express';
import { createCurso, listCursos, getCursoById, updateCurso, patchCurso as patchCursoModel, deleteCurso as deleteCursoModel } from '../models/curso';

export const addCurso = async (req: Request, res: Response) => {
  try {
    const curso = await createCurso(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
};

export const getCursos = async (req: Request, res: Response) => {
  try {
    const cursos = await listCursos();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar cursos' });
  }
};

export const getCurso = async (req: Request, res: Response) => {
  try {
    const curso = await getCursoById(parseInt(req.params.id));
    res.status(200).json(curso);
  } catch (error) {
    res.status(404).json({ error: 'Curso não encontrado' });
  }
};

export const editCurso = async (req: Request, res: Response) => {
  try {
    const curso = await updateCurso(parseInt(req.params.id), req.body);
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar curso' });
  }
};

export const patchCurso = async (req: Request, res: Response) => {
  try {
    const curso = await patchCursoModel(parseInt(req.params.id), req.body);
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar parcialmente curso' });
  }
};

export const deleteCurso = async (req: Request, res: Response) => {
  try {
    await deleteCursoModel(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar curso' });
  }
};
