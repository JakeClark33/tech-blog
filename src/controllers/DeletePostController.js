const db = require('../models');

class DeletePostController {
  static async get(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');

    const post = await db.posts.findOne({
      where: { id: req.params.id },
    });

    if (!post || post.userId !== req.session.userId) return res.render('404', { layout: 'layout' });

    return res.render('delete-post', { postId: req.params.id, session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');

    const post = await db.posts.findOne({
      where: { id: req.params.id },
    });

    if (!post || post.userId !== req.session.userId) return res.render('404', { layout: 'layout' });

    await post.destroy();

    return res.redirect('/dashboard');
  }
}

module.exports = DeletePostController;
