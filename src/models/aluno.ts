import knex from '../knex';

interface Aluno {
  id?: number;
  nome: string;
  email: string;
}

// Função para criar um novo aluno
export const createAluno = async (aluno: Aluno): Promise<Aluno> => {
  const [createdAluno] = await knex('alunos').insert(aluno).returning('*');
  return createdAluno;
};

// Função para listar todos os alunos (sem os cursos)
export const listAlunos = async (): Promise<Aluno[]> => {
  return knex('alunos').select('*');
};

// Função para visualizar um aluno e os seus cursos
export const getAlunoById = async (id: number): Promise<any> => {
  const aluno = await knex('alunos').where({ id }).first();
  if (!aluno) {
    throw new Error('Aluno não encontrado');
  }

  const cursos = await knex('cursos')
    .join('alunos_cursos', 'cursos.id', '=', 'alunos_cursos.curso_id')
    .where('alunos_cursos.aluno_id', id)
    .select('cursos.id', 'cursos.nome', 'cursos.descricao');

  return { ...aluno, cursos };
};

// Função para editar um aluno (PUT)
export const updateAluno = async (id: number, aluno: Aluno): Promise<Aluno> => {
  const [updatedAluno] = await knex('alunos')
    .where({ id })
    .update(aluno, ['id', 'nome', 'email']);
  return updatedAluno;
};

// Função para editar um aluno parcialmente (PATCH)
export const patchAluno = async (id: number, aluno: Partial<Aluno>): Promise<Aluno> => {
  const [patchedAluno] = await knex('alunos')
    .where({ id })
    .update(aluno, ['id', 'nome', 'email']);
  return patchedAluno;
};

// Função para deletar um aluno
export const deleteAluno = async (id: number): Promise<void> => {
  await knex('alunos').where({ id }).del();
};
