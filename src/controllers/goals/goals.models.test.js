const db = require('../../data/dbConfig.js');
const Goals = require('./goals.models.js');

describe('goals model', () => {
  let id;
  // const goalObj = {
  //   user_id: 1,
  //   jump_height: req.body.jumpHeight,
  //   start_date: moment().format('MMMM Do YYYY'),
  //   target_date: moment().add(req.body.target, 'w').format('MMMM Do YYYY'),
  //   completed: false
  // }
  let goalObj = { jump_height: 1000, target_date: 'date', user_id: 1, start_date: 'date', completed: false  }

  it('should insert the goal', async () => {
    [ id ] = await Goals.insertGoal(goalObj);
    expect(id).toBeTruthy();
  });

  it('should return goal', async () => {
    let goal = await Goals.findById(id)
    expect(goal).toEqual({ ...goalObj, id, completed: 0 })
  });

  it('should update goal', async () => {
    let result = await Goals.updateGoal(id, { ...goalObj, completed: 1 });
    expect(result).toBeTruthy()
  });

  it.only('should delete goal', async () => {
    let result = await Goals.deleteGoal(1);
    expect(result).toBeTruthy()
  });
});