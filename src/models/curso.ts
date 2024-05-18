import knex from '../knex';

interface Curso {
  id?: number;
  nome: string;
  descricao: string;
}

// Função para criar um novo curso
export const createCurso = async (curso: Curso): Promise<Curso> => {
  const [createdCurso] = await knex('cursos').insert(curso).returning('*');
  return createdCurso;
};

// Função para listar todos os cursos (sem os alunos)
export const listCursos = async (): Promise<Curso[]> => {
  return knex('cursos').select('*');
};

// Função para visualizar um curso e os seus alunos
export const getCursoById = async (id: number): Promise<any> => {
  const curso = await knex('cursos').where({ id }).first();
  if (!curso) {
    throw new Error('Curso não encontrado');
  }

  const alunos = await knex('alunos')
    .join('alunos_cursos', 'alunos.id', '=', 'alunos_cursos.aluno_id')
    .where('alunos_cursos.curso_id', id)
    .select('alunos.id', 'alunos.nome', 'alunos.email');

  return { ...curso, alunos };
};

// Função para editar um curso (PUT)
export const updateCurso = async (id: number, curso: Curso): Promise<Curso> => {
  const [updatedCurso] = await knex('cursos')
    .where({ id })
    .update(curso, ['id', 'nome', 'descricao']);
  return updatedCurso;
};

// Função para editar um curso parcialmente (PATCH)
export const patchCurso = async (id: number, curso: Partial<Curso>): Promise<Curso> => {
  const [patchedCurso] = await knex('cursos')
    .where({ id })
    .update(curso, ['id', 'nome', 'descricao']);
  return patchedCurso;
};

// Função para deletar um curso
export const deleteCurso = async (id: number): Promise<void> => {
  await knex('cursos').where({ id }).del();
};
