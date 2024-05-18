import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('alunos_cursos', (table) => {
    table.integer('aluno_id').unsigned().notNullable();
    table.foreign('aluno_id').references('alunos.id');
    table.integer('curso_id').unsigned().notNullable();
    table.foreign('curso_id').references('cursos.id');
    table.primary(['aluno_id', 'curso_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('alunos_cursos');
}
