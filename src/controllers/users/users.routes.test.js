const request = require('supertest');
const server = require('../../api/server.js');

describe('users route', () => {
  describe('POST /users/register', () => {
    it('should respond with 201 Create and return token', async () => {
      const userObj = {
        username: 'test62',
        password: 'test62',
        height: 175,
        jumpHeight: 50
      }
      const res = await request(server).post('/users/register').send(userObj);
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });
})