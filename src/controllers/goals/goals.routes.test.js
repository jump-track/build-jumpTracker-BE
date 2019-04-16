const request = require('supertest');
const server = require('../../api/server.js');

describe('goals route', () => {
  describe('POST /goals/new', () => {
    it.only('should respond with 201', async () => {
      const goalObj = {
        jumpHeight: 175,
        targetDate: 8
      }
      const res = await request(server).post('/goals/new').query({ user: '1' }).send(goalObj);
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });
});