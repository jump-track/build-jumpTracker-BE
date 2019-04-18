const knex = require('../../data/dbConfig.js');

const insertUser = async user =>
  knex('users')
    .insert(user, ['id'])

const getByUsername = async username =>
  knex('users')
    .select('username')
    .where('username', username)
    .first()

const validateUser = async username =>
  knex('users')
    .select('username', 'id', 'password')
    .where('username', username)
    .first()

module.exports = {
  insertUser,
  getByUsername,
  validateUser
}