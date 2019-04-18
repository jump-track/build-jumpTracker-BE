const knex = require('../../data/dbConfig.js');

const insertExercise = async ex =>
  knex('exercises')
    .insert(ex, ['id'])

const getExercises = async id =>
  knex('exercises')
    .where('goal_id', id)
    .select('exercises', 'date')

module.exports = {
  insertExercise,
  getExercises
}