
module.exports = {

  development: { 
    client: 'pg',
    connection: {
      port: 5432,
      host: '127.0.0.1',
      database: 'knex',
      user: 'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  docker_compose: {
    client: 'pg',
    connection: {
      port: 5432,
      host: 'postgres',
      database: 'knex',
      user: 'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  }
};
