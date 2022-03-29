const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const UserService = require('../services/UserService');

module.exports = Router().post('/register', async (req, res, next) => {
  try {
    const user = await UserService.create(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});
