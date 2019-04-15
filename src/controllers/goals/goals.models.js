const knex = require('../../data/dbConfig.js');

const insert = async goal =>
  knex('goals')
    .insert(goal)

const find = async id =>
  knex('goals')
    .where('id', id)
    .first()

const update = async (id, goal) =>
  knex('goals')
    .where('id', id)
    .update(goal)

const del = async id => {
  knex('goals')
    .where('id', id)
    .del()
}

module.exports = {
  insert,
  find,
  update,
  del
}