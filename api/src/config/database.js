import config from './config'
import knex from 'knex'
import bookshelf from 'bookshelf'

knex(config.db)
const db = bookshelf(knex)

db.plugin('registry');
db.plugin('virtuals');
db.plugin('visibility');

export default db