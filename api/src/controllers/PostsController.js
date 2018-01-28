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

  async add (req, res) {
    const { title, body } = req.body
    try {
      const post = await Post.forge({
        title, 
        body
      }).save()
      res.send(post.toJSON())
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

  async update (req, res) {
    const { id } = req.params
    const { body } = req;
    try {
      const post = await Post.where('id', id).fetch()
      if (post) {
        const savedModel = await post.save(body, { patch: true })
        res.send(savedModel.toJSON())       
      } else {
        throw new Error('Record not found!')
      }
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

  async delete (req, res) {
    const { id } = req.params
    try {
      const post = await Post.where('id', id).destroy()
      res.send(post.toJSON())
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

}

export default new PostsController()
