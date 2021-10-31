const express = require('express');
const AuthController = require('./AuthController.js');

const router = express.Router();

router.route('')
  .post((req, res, next) => AuthController.login(req, res, next))
  .delete((req, res, next) => AuthController.logout(req, res, next));

module.exports = router;
