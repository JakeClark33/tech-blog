const db = require('../models');
const { hashPassword } = require('../utils');

class SignupController {
  static get(req, res, _next) {
    return res.render('signup', { session: req.session, layout: 'layout' });
  }

  static async post(req, res, next) {
    try {
      if (!req.body.username || !req.body.password) {
        return res.render('/signup', { error: 'Missing username or password', session: req.session, layout: 'layout' });
      }

      const user = await db.users.create({
        username: req.body.username,
        passwordHash: hashPassword(req.body.password),
      });

      req.session.username = user.username;
      req.session.userId = user.id;

      return res.redirect('/dashboard');
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') return res.render('signup', { error: 'Username already in use.', session: req.session, layout: 'layout' });
      return next(err);
    }
  }
}

module.exports = SignupController;
