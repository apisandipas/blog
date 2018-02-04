// middleware for doing role-based permissions
export default (...allowed) => {
  const isAllowed = role => allowed.indexOf(role) > -1
  
  // return a middleware
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.toJSON().role))
      next() // role is allowed, so continue on the next middleware
    else {
      res.unauthorized() // user is forbidden
    }
  }
}