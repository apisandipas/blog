import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../models/user'

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  const user = await User.where('id', id).fetch()
  done(null, user)
})

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.where('email', email).fetch()
    if (!user){
      console.log('user = false')
      return done(null, false)
    }

    const authenticated = await user.authenticate(password)
    if (!authenticated) {
      console.log('authenticated = false')
      return done(null, false)
    }

    return done(null, user)
  } catch(err) {
    console.log('err',err)
    done(err)
  }
}))

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET
}
passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.where('id', payload.sub).fetch()
    if (!user){
      return done(null, false)
    }

    return done(null, user)
  } catch(err) {
    done(err)
  }
}))