const { QuillDeltaToHtmlConverter } = require('quill-delta-to-html');
const db = require('../models');

class EditPostController {
  static async get(req, res, _next) {
    const post = await db.posts.findOne({
      where: { id: req.params.id },
      raw: true,
    });

    return res.render('edit-post', { post, session: req.session, layout: 'layout' });
  }

  static async post(req, res, _next) {
    const contentOps = JSON.parse(req.body.content).ops;
    const converter = new QuillDeltaToHtmlConverter(contentOps, {});
    const content = converter.convert();

    console.log('body:', req.body);

    const post = await db.posts.findOne({
      where: { id: req.params.id },
    });

    post.set({
      title: req.body.title,
      slug: req.body.slug,
      image_seed: req.body.image_seed,
      content,
    });

    await post.save();

    return res.redirect('/dashboard');
  }
}

module.exports = EditPostController;
