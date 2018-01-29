import passport from 'passport'
import { Strategy } from 'passport-local'
import User from '../models/user'

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  const user = await User.where('id', id).fetch()
  done(null, user)
})

passport.use(new Strategy({ usernameField: 'email' },async (email, password, done) => {
  try {
    const user = await User.where('email', email).fetch()
    if (!user){
      return done(null, false)
    }

    const authenticated = await user.authenticate(password)
    if (!authenticated) {
      return done(null, false)
    }

    return done(null, user)
  } catch(err) {
    done(err)
  }
}))