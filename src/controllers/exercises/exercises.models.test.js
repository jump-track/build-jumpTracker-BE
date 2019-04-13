const db = require('../../data/dbConfig.js');
const Exercises = require('./exercises.models.js');

describe('exercises model', () => {
  let id;
  let exObj = { exercises: 'exercises', goal_id: 1 }

  it.skip('should insert the exercises', async () => {
    [ id ] = await Exercises.insert(exObj);
    expect(id).toBeTruthy();
  });

  it.skip('should return exercises', async () => {
    let ex = await Exercises.find(id)
    expect(ex).toEqual({ ...exObj, id })
  });
});