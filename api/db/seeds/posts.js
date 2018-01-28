const faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: faker.lorem.words(), body: faker.lorem.paragraphs()},
        {id: 2, title: faker.lorem.words(), body: faker.lorem.paragraph()},
        {id: 3, title: faker.lorem.words(), body: faker.lorem.paragraphs()}
      ]);
    });
};
