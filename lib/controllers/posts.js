const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

module.exports = Router()
  .get('/', authenticate, authorize, async (req, res, next) => {
    try {
      const posts = [
        {
          user_id: '1',
          title: 'post numero uno',
          content: 'my first post',
          user_id: '1',
        },
      ];

      res.send(posts);
    } catch (error) {
      next(error);
    }
  })
  .post('/posts', async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { title, description, created_at } = req.body;
      const post = await post.create({
        user_id,
        title,
        description,
        created_at,
      });
      res.send(post);
    } catch (error) {
      next(error);
    }
  });
