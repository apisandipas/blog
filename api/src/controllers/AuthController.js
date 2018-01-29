import User from '../models/user'

class AuthController {
  async login (req, res) {
    try {
      const user = await User.forge({email: req.body.email}).fetch()
      const match = await user.comparePassword(req.body.password)
      console.log(match)
      res.send(match)
    } catch(err) {
      res.serverError(new Error(err.message))
    }

  }
}

export default new AuthController()