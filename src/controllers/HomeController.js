const db = require('../models');

class HomeController {
  static async get(req, res, _next) {
    const posts = await db.posts.findAll({
      attributes: ['title', 'slug', 'description', 'imageSeed'],
      order: [
        ['createdAt', 'DESC'],
      ],
      raw: true,
    });
    return res.render('home', { posts, session: req.session, layout: 'layout' });
  }
}

module.exports = HomeController;
