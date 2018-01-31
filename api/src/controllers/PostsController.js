import Post from '../models/post'

const PAGE_SIZE = 10

class PostsController {

  async index (req, res) { 
    try {
      const { page } = req.query
      // const posts = await Post.fetchPage({
      //   page,
      //   pageSize: PAGE_SIZE,
      //   withRelated: 'user'  
      // })
      // 
      const posts = await Post.fetchAll({
        withRelated: 'user'  
      })
      res.json(posts.toJSON())
    } catch(err){
      res.serverError(new Error(err.message))
    }
  }

  async show (req, res) {
    const { id } = req.params
    try {
      const post = await Post.where('id', id).fetch({
        withRelated: ['user']
      })
      res.send(post.toJSON());
    } catch(err) {
      res.serverError(new Error(err.message))
    }
  }

  async add (req, res) {
    req.checkBody('title', 'Title is required.').notEmpty()
    req.checkBody('excerpt', 'Excerpt is required.').notEmpty()
    req.checkBody('body', 'Body is required.').notEmpty()
    const errors = req.validationErrors()
    if (errors.length) res.invalid(errors)

    try {
      const { excerpt, title, body } = req.body
      const post = await Post.forge({
        excerpt, 
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
