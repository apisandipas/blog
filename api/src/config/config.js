const {
  DB_DRIVER,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
  DB_CHARSET
} = process.env

export default {
  db: {
    client: DB_DRIVER || 'mysql',
    connection: {
      host     : DB_HOST || 'localhost',
      user     : DB_USER || 'homestead',
      password : DB_PASSWORD || 'secret',
      port     : DB_PORT || '33060',
      database : DB_NAME || 'redux_blog',
      charset  : DB_CHARSET || 'utf8'
    }
  }
}