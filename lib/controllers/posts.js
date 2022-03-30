const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const Post = require('../models/Post');

module.exports = Router()
  .get('/', authenticate, authorize, async (req, res, next) => {
    try {
      const posts = [
        {
          id: '1',
          title: 'post numero uno',
          description: 'my first post',
          created_at: expect.any(Number),
        },
      ];

      res.send(posts);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      // const { id } = req.user;
      // const { title, description, created_at } = req.body;
      const post = await Post.insert(req.body);
      console.log(post);
      res.send(post);
    } catch (error) {
      next(error);
    }
  });
