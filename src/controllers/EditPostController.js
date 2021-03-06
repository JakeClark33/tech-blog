const { QuillDeltaToHtmlConverter } = require('quill-delta-to-html');
const db = require('../models');

class EditPostController {
  static async get(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');

    const post = await db.posts.findOne({
      where: { id: req.params.id },
      raw: true,
    });

    if (!post || post.userId !== req.session.userId) return res.render('404', { layout: 'layout' });

    return res.render('edit-post', { post, session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    if (!req.session.userId) return res.redirect('/login');

    const contentOps = JSON.parse(req.body.content).ops;
    const converter = new QuillDeltaToHtmlConverter(contentOps, {});
    const content = converter.convert();

    const post = await db.posts.findOne({
      where: { id: req.params.id },
    });

    if (!post || post.userId !== req.session.userId) return res.render('404', { layout: 'layout' });

    post.set({
      title: req.body.title,
      slug: req.body.slug,
      imageSeed: req.body.imageSeed,
      description: req.body.description,
      content,
    });

    await post.save();

    return res.redirect('/dashboard');
  }
}

module.exports = EditPostController;
