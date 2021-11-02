const sequelize = require('sequelize');
const db = require('../models');

class DashboardController {
  static async get(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');
    const posts = await db.posts.findAll({
      attributes: [
        'title',
        'id',
        'slug',
        [sequelize.fn('date_format', sequelize.col('Post.createdAt'), '%b %d, %Y'), 'date'],
      ],
      where: { userId: req.session.userId },
      order: [
        ['createdAt', 'DESC'],
      ],
      raw: true,
    });

    return res.render('dashboard', { posts, session: req.session, layout: 'layout' });
  }
}

module.exports = DashboardController;
