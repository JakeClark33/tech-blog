const db = require('../models');
const { passwordCompareSync } = require('../utils');

class LoginController {
  static async get(req, res, _next) {
    return LoginController.renderLoginPage(req, res);
  }

  static async post(req, res, _next) {
    const invalidError = 'Invalid username or password';
    if (!req.body.username || !req.body.password) {
      return LoginController.renderLoginPage(req, res, invalidError);
    }

    const user = await db.users.findOne({
      where: { username: req.body.username },
      attributes: { include: ['passwordHash'] },
    });

    if (!user || !passwordCompareSync(req.body.password, user.passwordHash)) {
      return LoginController.renderLoginPage(req, res, invalidError);
    }

    req.session.username = user.username;
    req.session.userId = user.id;

    return res.redirect('/dashboard');
  }

  static renderLoginPage(req, res, error = null) {
    const options = {
      session: req.session,
      layout: 'layout',
    };

    if (error) options.error = error;
    return res.render('login', options);
  }
}

module.exports = LoginController;
