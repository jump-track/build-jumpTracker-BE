const knex = require('../../data/dbConfig.js');

const insert = async ex =>
  knex('exercises')
    .insert(ex)

const find = async id =>
  knex('exercises')
    .where('id', id)
    .first()

module.exports = {
  insert,
  find
}