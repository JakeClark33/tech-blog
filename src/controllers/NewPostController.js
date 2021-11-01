const { QuillDeltaToHtmlConverter } = require('quill-delta-to-html');
const db = require('../models');
const LoginController = require('./LoginController');

class NewPostController {
  static get(req, res, _next) {
    return res.render('new-post', { session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    const contentOps = JSON.parse(req.body.content).ops;
    const converter = new QuillDeltaToHtmlConverter(contentOps, {});
    const content = converter.convert();

    const authorId = req.session.userId;

    if (!authorId) {
      return LoginController.renderLoginPage(req, res);
    }

    const post = await db.posts.create({
      title: req.body.title,
      slug: req.body.slug,
      image_seed: req.body.image_seed,
      content,
      author_id: authorId,
    });

    return res.redirect(`/post/${post.slug}`);
  }
}

module.exports = NewPostController;
