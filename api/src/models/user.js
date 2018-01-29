import bcrypt from 'bcrypt'
import db from '../database'

const User = db.Model.extend({
  tableName: 'users',
  // hidden: ['password'],
  hasTimestamps: ['createdAt', 'updatedAt'],
  initialize () {
    this.on('creating', this.hashPassword, this)
  },
  hashPassword (model, attrs, options) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(model.attributes.password, 10, (err, hash) => {
        if( err ) reject(err)
        model.set('password', hash)
        resolve(hash)
      });
    });
  },
  comparePassword (passwordCandidate) {
    console.log('passwordCandidate', passwordCandidate)
    console.log('this.password', this.password)
    return bcrypt.compare(passwordCandidate, this.password)
  }
})

export default db.model('User', User)