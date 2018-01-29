import db from '../database'
import Post from './user'

const Tag = db.Model.extend({
  tableName: 'tags',
  hasTimestamps: ['created_at', 'updated_at'],
  // user () {
  //   return this.belongsTo(User);
  // },
  // posts () {
  //   return this.belongsToMany(Post);
  // }
})

export default db.model('Tag', Tag)