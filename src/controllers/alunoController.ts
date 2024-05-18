import { Request, Response } from 'express';
import { createAluno, listAlunos, getAlunoById, updateAluno, patchAluno as patchAlunoModel, deleteAluno as deleteAlunoModel } from '../models/aluno';

export const addAluno = async (req: Request, res: Response) => {
  try {
    const aluno = await createAluno(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
};

export const getAlunos = async (req: Request, res: Response) => {
  try {
    const alunos = await listAlunos();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar alunos' });
  }
};

export const getAluno = async (req: Request, res: Response) => {
  try {
    const aluno = await getAlunoById(parseInt(req.params.id));
    res.status(200).json(aluno);
  } catch (error) {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
};

export const editAluno = async (req: Request, res: Response) => {
  try {
    const aluno = await updateAluno(parseInt(req.params.id), req.body);
    res.status(200).json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
};

export const patchAluno = async (req: Request, res: Response) => {
  try {
    const aluno = await patchAlunoModel(parseInt(req.params.id), req.body);
    res.status(200).json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar parcialmente aluno' });
  }
};

export const deleteAluno = async (req: Request, res: Response) => {
  try {
    await deleteAlunoModel(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar aluno' });
  }
};
