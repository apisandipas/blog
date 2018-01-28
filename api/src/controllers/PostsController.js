import Post from '../models/post'

class PostsController {

  async index (req, res) { 
    try {
      const posts = await Post.fetchAll()
      res.json(posts.toJSON())
    } catch(err){
      res.serverError(new Error(err.message))
    }
  }

  async show (req, res) {
    const { id } = req.params
    try {
      const post = await Post.where('id', id).fetch()
      res.send(post.toJSON());
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

}

export default new PostsController()
