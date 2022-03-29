const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

describe('secret-scratch routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('signs up a user via POST', async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send({ email: 'chase@gmail.com', password: 'password' });

    expect(res.body).toEqual({
      id: expect.any(String),
      email: 'chase@gmail.com',
    });
  });
});
