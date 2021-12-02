
module.exports = {  

  development: {
    client: 'pg', //or postgresql
    connection: {
      port: 5432,
      host: '127.0.0.1',  //postgres
      database: 'knex',
      user:     'knex',
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
      user:     'knex',
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
    //  {
    //   port: 5432,
    //   host: 'ec2-54-84-142-90.compute-1.amazonaws.com',  //postgres
    //   database: 'd9ov1142fpfjnj',
    //   user:     'rubhuptnudsfeb',
    //   password: '4c816140d0d2b36c38b409c7be6a384ae49c01c4682d1db44e15f58b534747ef'      

    // },
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
