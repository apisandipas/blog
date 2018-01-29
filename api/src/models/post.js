import db from '../database'
import User from './user'

const Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: ['created_at', 'updated_at'],
  user () {
    return this.belongsTo(User);
  }
})

export default db.model('Post', Post)