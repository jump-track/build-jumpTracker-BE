const db = require('../../data/dbConfig.js');
const Goals = require('./goals.models.js');

describe('goals model', () => {
  // beforeAll(async () => {
  //   await db('users').truncate();
  // });
  /*  Comment out truncate because it is wiping the 
      goals database clean and causing FK constraints for the other tests */

  let id;
  const user_id = 1;
  let goalObj = { jump_height: 1000, target_date: 'date', user_id, start_date: 'date', completed: false  }

  it('should insert the goal', async () => {
    [id] = await Goals.insertGoal(goalObj);
    expect(id).toBeTruthy();
  });

  it('should return a goal', async () => {
    let goal = await Goals.findById(id)
    expect(goal).toEqual({ ...goalObj, id, completed: 0 })
  });

  it('should update goal', async () => {
    let result = await Goals.updateGoal(user_id, id, { completed: 1 });
    expect(result).toBeTruthy()
  });

  it('should delete goal', async () => {
    let result = await Goals.deleteGoal(user_id, id);
    expect(result).toBeTruthy()
  });
});