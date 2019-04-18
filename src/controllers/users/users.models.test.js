const db = require('../../data/dbConfig.js');
const Users = require('./users.models.js');

describe('user model', () => {
  let id = 8 // Define User ID for scope.
  let userObj = { username: `test${id}`, password: 'test', height: 175, jump_height: 40 }

  it.skip('should insert the user', async () => {
    const [ id ] = await Users.insertUser(userObj);
    expect(id).toBeTruthy();
  });

  it.skip('should return user', async () => {
    let user = await Users.getByUsername(userObj.username)
    expect(user).toEqual({ id: id, username: `test${id}`, password: 'test', height: 175, jump_height: 40 })
  });
});