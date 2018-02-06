require('babel-polyfill')
global.expect = require('chai').expect
global.request = require('supertest');
global.faker = require('faker');

process.env.NODE_ENV = 'test'

const dbConfig = require('../knexfile.js')[process.env.NODE_ENV]
const knex = require('knex')(dbConfig)

beforeEach(done => {
  knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
      .then(() => {
        done()
      })
    }).catch(err => done(err))
})