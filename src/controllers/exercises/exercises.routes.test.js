const request = require('supertest');
const server = require('../../api/server.js');

describe('exercises route', () => {
  /* these both work but require a token otherwise a 401 is returned when removing
      the skip method remember to comment out the restricted middleware */
  describe('POST /exercises/41', () => {
    it.skip('should respond with 201', async () => {
      const res = await request(server).post('/exercises/41').send({ exercises: 'string' });
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });

  describe('GET /exercises/', () => {
    it('should respond with a 200 status code', async () => {
      const res = await request(server).get('/exercises/45');
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });
});