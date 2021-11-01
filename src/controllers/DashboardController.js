const db = require('../models');

class DashboardController {
  static async get(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');
    const posts = await db.posts.findAll({
      where: { userId: req.session.userId },
      raw: true,
    });

    console.log('posts', posts);

    return res.render('dashboard', { posts, session: req.session, layout: 'layout' });
  }
}

module.exports = DashboardController;
