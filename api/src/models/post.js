import db from '../database'

const Post = db.Model.extend({
  tableName: 'posts'
})

export default db.model('Post', Post)