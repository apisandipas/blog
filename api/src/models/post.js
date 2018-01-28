import db from '../database'

const Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: ['createdAt', 'updatedAt']
})

export default db.model('Post', Post)