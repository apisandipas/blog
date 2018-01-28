// Update with your config settings.
const env = require('dotenv')
env.config()

const {
  DB_DRIVER,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
  DB_CHARSET
} = process.env

module.exports = {

  development: {
    client: DB_DRIVER || 'mysql',
    connection: {
      host: DB_HOST || '127.0.0.1',
      port: DB_PORT || '33060',
      database: DB_NAME || 'redux_blog',
      user:     DB_USER ||'homestead',
      password: DB_PASSWORD || 'secret'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds',
    }
  },

  staging: {
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
