module.exports = (req, res, next) => {
  try {
    // should have access to req.user from the
    // authenticate middleware
    if (!req.user.email) throw new Error('Unauthorized');
    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
