import User from '../models/user'

class AuthController {
  async login (req, res) {
    try {
      const user = await User.forge({email: req.body.email}).fetch()
      const match = await user.authenticate(req.body.password)
      
      req.session.isAuthenticated = true
      let matchingUser = match.toJSON()
      
      delete matchingUser.password_digest
      delete matchingUser.password

      req.session.user = matchingUser
      res.send(matchingUser)
    } catch(err) {
      res.unauthorized()  
    }

  }
}

export default new AuthController()