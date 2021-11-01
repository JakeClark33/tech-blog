class LogoutController {
  static get(req, res, _next) {
    req.session.destroy();
    return res.redirect('/');
  }
}

module.exports = LogoutController;
