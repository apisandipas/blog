const faker = require('faker')
const range = require('lodash.range')
const map = require('lodash.map')
const random = require('lodash.random')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      const posts = map(range(1, 100, 1), (i) => {
        const user_id = random(1, 9)
        return {
          id: i,
          user_id,
          title: i + ' ' + faker.lorem.words(),
          slug: faker.lorem.slug(),
          excerpt: faker.lorem.paragraphs(2),
          body: faker.lorem.paragraphs(5),
          created_at: new Date(new Date() - (360000  * (i * -1))),
          updated_at: new Date()
        }
      })
      return knex('posts').insert(posts)
    })
}
