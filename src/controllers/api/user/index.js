const express = require('express');
const UserController = require('./UserController.js');

const router = express.Router();

router.route('')
  .post((req, res, next) => UserController.createUser(req, res, next));

module.exports = router;
