const db = require('../../data/dbConfig.js');
const Users = require('./users.models.js');

describe('user model', () => {
  // beforeAll(async () => {
  //   await db('users').truncate();
  // });
  /*  Comment out truncate because it is wiping the 
      users database clean and causing FK constraints for the other tests */

  let id = 1 // Define User ID for scope.
  let userObj = { username: `test${id}`, password: 'test', height: 175, jump_height: 40 }

  it.skip('should insert the user', async () => {
    const [id] = await Users.insertUser(userObj);
    expect(id).toBeTruthy();
  });

  it('should return user', async () => {
    let user = await Users.getByUsername(userObj.username)
    expect(user).toEqual({ username: `test${id}` });
  });
});