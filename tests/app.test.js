const request = require('supertest');
const app = require('../src/app');


describe('API Test', () => {
  it('GET / should return message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Enterprise SCM Lab');
  });

  it('GET /health should return OK', () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });
});
