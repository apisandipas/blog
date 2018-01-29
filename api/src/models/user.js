import bcrypt from 'bcrypt'
import db from '../database'
import Post from './post'

const User = db.Model.extend({
  tableName: 'users',
  hasSecurePassword: true,
  hidden: ['password_digest'],
  hasTimestamps: ['created_at', 'updated_at'],
  // posts () {
  //   return this.hasMany(Post);
  // }
})

export default db.model('User', User)