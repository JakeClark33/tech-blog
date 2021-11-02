const db = require('../models');

class CommentController {
  static async post(req, res, next) {
    console.log('test');

    if (!req.session.userId) return res.redirect('/login');

    try {
      const comment = await db.comments.create({
        content: req.body.content,
        postId: req.params.id,
        userId: req.session.userId,
      });

      console.log(comment);

      const post = await db.posts.findOne({
        where: { id: req.params.id },
      });

      return res.redirect(`/post/${post.slug}`);
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = CommentController;
