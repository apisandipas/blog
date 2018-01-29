import User from '../models/user'

class AuthController {
  login (req, res) {
    console.log('LOGIN ROUTE HIT!')
    res.redirect('/')
  }

  logout (req, res) {
    req.logout();
    res.redirect('/');
  }
}

export default new AuthController()