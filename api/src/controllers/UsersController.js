import User from '../models/user'

class UsersController {

  async index (req, res) { 
    try {
      const users = await User.fetch()
      res.json(users.toJSON())
    } catch(err){
      res.serverError(new Error(err.message))
    }
  }

  async show (req, res) {
    const { id } = req.params
    try {
      const user = await User.where('id', id).fetch()
      res.send(user.toJSON());
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

  async add (req, res) {
    req.checkBody('email', 'Email is required.').notEmpty()
    req.checkBody('email', 'Email must be a valid email address').isEmail()
    req.checkBody('email', 'Email must be between 4 and 100 characters long').len(4, 100)
    req.checkBody('password', 'Password is required.').notEmpty()
    req.checkBody('password', 'Password must be between 8 and 100 characters long.').len(8, 100)
    req.checkBody('passwordConfirm', 'Password Confirm must match password').equals(req.body.password)
    
    const errors = req.validationErrors()
    if (errors.length) res.invalid(errors)

    try {
      const { email, password } = req.body
      const user = await User.forge({
        email, 
        password
      }).save()
      res.send(user.toJSON())
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

}

export default new UsersController()