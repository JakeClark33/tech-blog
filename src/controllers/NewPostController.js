const { QuillDeltaToHtmlConverter } = require('quill-delta-to-html');
const db = require('../models');

class NewPostController {
  static get(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');
    return res.render('new-post', { session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');

    const contentOps = JSON.parse(req.body.content).ops;
    const converter = new QuillDeltaToHtmlConverter(contentOps, {});
    const content = converter.convert();

    await db.posts.create({
      title: req.body.title,
      slug: req.body.slug,
      imageSeed: req.body.imageSeed,
      description: req.body.description,
      userId: req.session.userId,
      content,
    });

    return res.redirect('/dashboard');
  }
}

module.exports = NewPostController;
