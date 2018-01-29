const faker = require('faker')
const range = require('lodash.range')
const map = require('lodash.map')
const random = require('lodash.random')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      const posts = map(range(1, 100, 1), (i) => {
        const user_id = random(1, 10)
        return  {
          id: i, 
          user_id,
          title: faker.lorem.words(), 
          body: faker.lorem.paragraphs(),
          created_at: new Date(),
          updated_at: new Date()
        }
      })
      return knex('posts').insert(posts);
    });
};
