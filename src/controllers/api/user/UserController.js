/* eslint-disable class-methods-use-this */
const { hashPassword } = require('../../../utils/index.js');
const db = require('../../../models');

module.exports = class UserController {
  static async createUser(req, res, next) {
    try {
      const user = await db.users.create({
        username: req.body.username,
        passwordHash: hashPassword(req.body.password),
      });

      req.session.username = user.username;
      req.session.userId = user.id;

      return res.status(200).send();
    } catch (err) {
      return next(err);
    }
  }
};
