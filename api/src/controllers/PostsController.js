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
    try {
      const errors = validatePost(req.body)
      if (errors.length) res.invalid(errors)
      const { title, body } = req.body
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

const validatePost = ({ title, body }) => {
  let errors = []
  if (!title || title.legth == 0){
    errors.push("Title is a required field")
  }

  if (!body || body.legth == 0){
    errors.push("Body is a required field")
  }

  return errors
}

export default new PostsController()
