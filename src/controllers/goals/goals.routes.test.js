const request = require('supertest');
const server = require('../../api/server.js');

describe('goals route', () => {
  /* these both work but require a token otherwise a 401 is returned when removing
      the skip method remember to comment out the restricted middleware */
  describe('POST /goals/', () => {
    // this test works follow notes before remove skip method.
    it.skip('should respond with 201', async () => {
      const goalObj = {
        jumpHeight: 175,
        target: 2,
      }

      // when using this route go into the goal.route.js
      // and adjust the user_id on line's 23 &  24, use hardcoded variable.

      const res = await request(server).post('/goals/').send(goalObj);
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });

  describe('GET /goals/', () => {
    it.skip('should respond with a 200 status code', async () => {
      const res = await request(server).get('/goals/');
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });

  describe('PUT /goals/:id', () => {
    it.skip('should respond with 200', async () => {
      const res = await request(server).put('/goals/44').send({ completed: true });
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });

  describe('DELETE /goals/:id', () => {
    it.skip('should respond with 200', async () => {
      const res = await request(server).delete('/goals/63').send({ completed: true });
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ message: 'Goal deleted' });
    });
  });
});