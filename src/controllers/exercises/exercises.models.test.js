const db = require('../../data/dbConfig.js');
const Exercises = require('./exercises.models.js');

describe('exercises model', () => {
  beforeAll(async () => {
    await db('exercises').truncate();
  });

  let goal_id = 45; // manually adjust goal_id to pass test, current goal_id may not be in the db anymore.
  const exObj = { exercises: 'exercises', goal_id, date: 'string' }

  it('should insert the exercises', async () => {
    const [id] = await Exercises.insertExercise(exObj);
    expect(id).toBeTruthy();
  });

  it('should return exercises', async () => {
    let [ex] = await Exercises.getExercises(goal_id)
    expect(ex).toEqual({ exercises: 'exercises', date: 'string' })
  });
});