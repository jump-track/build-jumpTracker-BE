const knex = require('../../data/dbConfig.js');

const insert = async user =>
  knex('users')
    .insert(user, ['id'])

const find = async id =>
  knex('users')
    .where('id', id)
    .first()

const get = async username =>
  knex('users')
    .select('username')
    .where('username', username)
    .first()

module.exports = {
  insert,
  find,
  get
}