import db from '../database'
import User from './user'
import Tags from './tag'

const Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: ['created_at', 'updated_at'],
  // user () {
  //   return this.belongsTo(User);
  // },
  // tags () {
  //   return this.belongsToMany(Tag);
  // }
})

export default db.model('Post', Post)