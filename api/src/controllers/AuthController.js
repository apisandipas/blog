import User from '../models/user'

class AuthController {
  login (req, res) {
    res.redirect('/')
  }

  logout (req, res) {
    req.logout();
    res.redirect('/');
  }

  currentUser (req, res) {
    if (req.isAuthenticated()) {
      res.send(req.user)
    }
  }

  async register (req, res) {
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

      // Check for existing accound with email
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
          return res.send(user.toJSON())
        });
      }
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }
}

export default new AuthController()