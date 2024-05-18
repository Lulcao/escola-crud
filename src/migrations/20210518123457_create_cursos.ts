import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cursos', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.text('descricao').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cursos');
}
