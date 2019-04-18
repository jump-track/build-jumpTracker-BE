const knex = require('../../data/dbConfig.js');

const insertGoal = async goal =>
  knex('goals')
    .insert(goal, ['id'])

const getGoals = async id =>
  knex('goals')
    .where('user_id', id)
    .select('id', 'jump_height', 'start_date', 'target_date', 'completed')

const findById = async id =>
  knex('goals')
    .where('id', id)

const updateGoal = async (userId, goalId, goal) =>
  knex('goals')
    .where({
      user_id: userId,
      id: goalId
    })
    .update(goal)

const deleteGoal = async (userId, goalId) =>
  knex('goals')
    .where({
      user_id: userId,
      id: goalId
    })
    .del()

module.exports = {
  insertGoal,
  findById,
  updateGoal,
  deleteGoal,
  getGoals
}