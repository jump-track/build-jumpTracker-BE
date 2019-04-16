const knex = require('../../data/dbConfig.js');

const insertGoal = async goal =>
  knex('goals')
    .insert(goal)
// .insert(goal, ['id'])

const getGoals = async id =>
  knex('goals')
    .where('user_id', id)

const findById = async id =>
  knex('goals')
    .where('id', id)

const updateGoal = async (id, goal) =>
  knex('goals')
    .where('id', id)
    .update(goal)

const deleteGoal = async id => {
  knex('goals')
    .where('id', id)
    .del()
}

module.exports = {
  insertGoal,
  findById,
  updateGoal,
  deleteGoal,
  getGoals
}