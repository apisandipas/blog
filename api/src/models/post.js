import db from '../database'

const Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: ['created_at', 'updated_at']
})

export default db.model('Post', Post)