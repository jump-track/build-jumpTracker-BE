const db = require('../../data/dbConfig.js');
const Goals = require('./goals.models.js');

describe('goals model', () => {
  let id;
  let goalObj = { jump_height: 175, target_date: 1, user_id: 1 }

  it.skip('should insert the goal', async () => {
    [ id ] = await Goals.insertGoal(goalObj);
    expect(id).toBeTruthy();
  });

  it.skip('should return goal', async () => {
    let goal = await Goals.findById(id)
    expect(goal).toEqual({ ...goalObj, id, completed: 0 })
  });

  it.skip('should update goal', async () => {
    let result = await Goals.updateGoal(id, { ...goalObj, completed: 1 });
    expect(result).toBeTruthy()
  });

  it.skip('should delete goal', async () => {
    let result = await Goals.delGoal(19);
    expect(result).toBeTruthy()
  });
});