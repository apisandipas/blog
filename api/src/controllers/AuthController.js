import User from '../models/user'
import jwt from 'jwt-simple'

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  const secret = process.env.JWT_SECRET
  const payload = { 
    sub: user.id,
    name: user.name,
    email: user.email, 
    role: user.role,
    iat: timestamp 
  }
  return jwt.encode(payload, secret)
}

class AuthController {
  login (req, res) {
    res.json({
      token: tokenForUser(req.user.toJSON())
    })
  }

  logout (req, res) {
    req.logout();
  }

  async register (req, res, next) {
    req.checkBody('name', 'Name is required.').notEmpty()
    req.checkBody('email', 'Email is required.').notEmpty()
    req.checkBody('email', 'Email must be a valid email address').isEmail()
    req.checkBody('email', 'Email must be between 4 and 100 characters long').len(4, 100)
    req.checkBody('password', 'Password is required.').notEmpty()
    req.checkBody('password', 'Password must be between 8 and 72 characters long.').len(8, 72)
    req.checkBody('passwordConfirm', 'Password Confirm must match password').equals(req.body.password)
    
    const errors = req.validationErrors()
    if (errors.length) res.invalid(errors)

    try {
      const { name, email, password } = req.body

      // Check for existing account with email
      const existingUser = await User.where('email', email).fetch()
      if (existingUser) {
        res.invalid("Email is already taken")
      } else {
         const user = await User.forge({
          name, 
          email, 
          password
        }).save()
        req.login(user, function(err) {
          if (err) { return next(err); }
          res.json({
            token: tokenForUser(user.toJSON())
          })
        });
      }
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }
}

export default new AuthController()