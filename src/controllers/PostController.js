const db = require('../models');

class PostController {
  static async get(req, res, _next) {
    const post = await db.posts.findOne({
      where: { slug: req.params.slug },
      raw: true,
    });

    return res.render('post', { post, session: req.session, layout: 'layout' });
  }
}

module.exports = PostController;
