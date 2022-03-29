const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('secret-scratch routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('signs up a use via POST', async () => {
    const res = await request(app)
      .post('/api/v1/users/sessions')
      .send({ username: 'chase', password: 'password' });

    expect(res.body).toEqual({ id: expect.any(String), username: 'chase' });
  });
});
