const knex = require('../../data/dbConfig.js');

const insertExercise = async ex =>
  knex('exercises')
    .insert(ex)

const getExercises = async id =>
  knex('exercises')
    .where('id', id)

module.exports = {
  insertExercise,
  getExercises
}