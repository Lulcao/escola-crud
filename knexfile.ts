import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5433, 
      database: 'escola_db',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/migrations',
      tableName: 'knex_migrations',
      schemaName: 'escola_schema'
    },
    seeds: {
      directory: './src/seeds'
    }
  }
};

export default config;
