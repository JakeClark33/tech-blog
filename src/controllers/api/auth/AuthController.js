/* eslint-disable class-methods-use-this */
const { passwordCompareSync } = require('../../../utils/index.js');
const db = require('../../../models');

module.exports = class AuthController {
  static async login(req, res, next) {
    try {
      if (!req.body.username || !req.body.password) {
        return next(new Error('Invalid Body!'));
      }

      const user = await db.users.findOne({
        where: { username: req.body.username },
        attributes: { include: ['passwordHash'] },
      });

      if (!user || !passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error('Invalid username or password!'));
      }

      req.session.username = user.username;
      req.session.userId = user.id;

      return res.status(200).send();
    } catch (err) {
      return next(err);
    }
  }

  static async logout(req, res, next) {
    try {
      req.session.destroy();
      return res.status(200).send();
    } catch (err) {
      return next(err);
    }
  }
};
