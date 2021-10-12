// Update with your config settings.

const path = require("path");
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'graphql',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'server', 'migration')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'server', 'seed')
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'graphql',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'server', 'migration')
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
