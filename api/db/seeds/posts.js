const faker = require('faker')
const range = require('lodash.range')
const map = require('lodash.map')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      // 
      const posts = map(range(1, 100, 1), (i) => {
        return  {
          id: i, 
          title: faker.lorem.words(), 
          body: faker.lorem.paragraphs()
        }
      })
      return knex('posts').insert(posts);
    });
};
