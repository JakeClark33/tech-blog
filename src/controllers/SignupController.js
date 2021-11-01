const db = require('../models');
const { hashPassword } = require('../utils');

class SignupController {
  static get(req, res, _next) {
    return res.render('signup', { session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    const user = await db.users.create({
      username: req.body.username,
      passwordHash: hashPassword(req.body.password),
    });

    console.log(user);

    req.session.username = user.username;
    req.session.userId = user.id;

    return res.redirect('/dashboard');
  }
}

module.exports = SignupController;
