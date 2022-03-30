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

  it('signs in an existing user', async () => {
    const user = await UserService.create({
      email: 'chase@gmail.com',
      password: 'password',
    });

    const res = await request(app)
      .post('/api/v1/users/session')
      .send({ email: 'chase@gmail.com', password: 'password' });
    expect(res.body).toEqual({
      message: 'Sign in Successful',
      user,
    });
  });

  it('allows the `user` user to view a list of posts', async () => {
    const agent = request.agent(app);

    await UserService.create({
      email: 'user',
      password: 'user',
    });

    await UserService.create({
      email: 'chase@gmail.com',
      password: 'password',
    });

    let res = await agent.get('/api/v1/users/secret');
    expect(res.status).toEqual(401);
  });
});
