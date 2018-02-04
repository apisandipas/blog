import db from '../database'
import User from './user'
import { slugify } from '../services/utils'


const Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: ['created_at', 'updated_at'],
  initialize () {
    this.on('creating', this.slugifyTitle, this);
  },
  slugifyTitle (model, attrs, options) {
    model.set('slug', slugify(model.attributes.title))
  },
  user () {
    return this.belongsTo(User);
  }
})

export default db.model('Post', Post)