import app from '../../src/'
import Post from '../../src/models/post'


const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam, a amet, labore soluta adipisci culpa animi dignissimos perferendis at minus, expedita nobis incidunt quidem! Facilis iste obcaecati quo suscipit.'
const excerpt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

describe('Posts Controller', () => {

  it('GET to /api/posts get a list of posts', (done) => {
    const post0 = new Post({ title: 'Test Title 0', body, excerpt })
    const post1 = new Post({ title: 'Test Title 1', body, excerpt })
    const post2 = new Post({ title: 'Test Title 2', body, excerpt })
    const post3 = new Post({ title: 'Test Title 3', body, excerpt })

    Promise.all([post0.save(), post1.save(), post2.save(), post3.save()])
      .then((response) => {
        request(app)
          .get(`/api/posts`)
          .end((err, res) => {
            expect(res.body.length).to.equal(4)
            expect(res.body[0].title).to.equal('Test Title 0')
            done()
          })
      }).catch(e => done(e))
  })

  it('GET to /api/posts/:id fetches a single post', (done) => {
    let post = { 
      title: 'First post title', 
      body, 
      excerpt 
    }
    

    Post.forge(post).save()
      .then(post => {
        expect(post.attributes.title).to.equal('First post title');
        expect(post.attributes.slug).to.equal('first-post-title');

        Post.fetchAll().then(post => {
            request(app)
            .get(`/api/posts/${post.id}`)
            .end((err, res) => {
              expect(post.attributes.id).to.equal(res.body.id)
              done()
            })
            done()
          })
        })
        .catch(e => done(e))
    })
})