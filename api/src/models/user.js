import bcrypt from 'bcrypt'
import db from '../database'

const User = db.Model.extend({
  tableName: 'users',
  hasSecurePassword: true,
  hasTimestamps: ['created_at', 'updated_at']
})

export default db.model('User', User)