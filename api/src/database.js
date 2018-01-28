import knexConfig from '../knexfile'
import Knex from 'knex'
import bookshelf from 'bookshelf'

const env = process.env.NODE_ENV || 'development'
const knex = Knex(knexConfig[env])

const db = bookshelf(knex)

db.plugin('registry');
db.plugin('virtuals');
db.plugin('visibility');

export default db