const requireLogin = (req, res, next) =>{
  if (!req.user) {
    return res.unauthorized();
  }

  next()
}

export default requireLogin