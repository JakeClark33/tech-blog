const db = require('../models');
const { hashPassword } = require('../utils');

class SignupController {
  static get(req, res, _next) {
    return res.render('signup', { session: req.session, layout: 'layout' });
  }

  static post(req, res, _next) {
    const user = db.users.create({
      username: req.body.username,
      passwordHash: hashPassword(req.body.password),
    });

    req.session.username = user.username;
    req.session.userId = user.id;

    return res.redirect('/dashboard');
  }
}

module.exports = SignupController;
