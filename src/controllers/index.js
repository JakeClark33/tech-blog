const express = require('express');
const path = require('path');
const HomeController = require('./HomeController');
const NewPostController = require('./NewPostController');
const PostController = require('./PostController');
const EditPostController = require('./EditPostController');
const DashboardController = require('./DashboardController');
const LoginController = require('./LoginController');
const LogoutController = require('./LogoutController');
const SignupController = require('./SignupController');

const router = express.Router();

router.use('/public', express.static(path.join(__dirname, '../../public')));

router.route('/')
  .get((req, res, next) => HomeController.get(req, res, next));

router.route('/dashboard')
  .get((req, res, next) => DashboardController.get(req, res, next));

router.route('/dashboard/new-post')
  .get((req, res, next) => NewPostController.get(req, res, next))
  .post((req, res, next) => NewPostController.post(req, res, next));

router.route('/login')
  .get((req, res, next) => LoginController.get(req, res, next))
  .post((req, res, next) => LoginController.post(req, res, next));

router.route('/logout')
  .get((req, res, next) => LogoutController.get(req, res, next));

router.route('/post/:slug')
  .get((req, res, next) => PostController.get(req, res, next));

router.route('/post/:id/edit')
  .get((req, res, next) => EditPostController.get(req, res, next))
  .post((req, res, next) => EditPostController.post(req, res, next));

router.route('/signup')
  .get((req, res, next) => SignupController.get(req, res, next))
  .post((req, res, next) => SignupController.post(req, res, next));

router.route('/**')
  .get((_req, res, _next) => res.render('404', { layout: 'layout' }));

module.exports = router;
