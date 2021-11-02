const sequelize = require('sequelize');
const db = require('../models');

class PostController {
  static async get(req, res, next) {
    try {
      const post = await db.posts.findOne({
        attributes: [
          'id',
          'slug',
          'title',
          'content',
          'imageSeed',
          'userId',
          [sequelize.fn('date_format', sequelize.col('Post.createdAt'), '%b %d, %Y'), 'date'],
        ],
        include: [
          {
            model: db.users,
          },
        ],
        where: { slug: req.params.slug },
      });

      if (!post) return res.render('404', { layout: 'layout' });

      const comments = await db.comments.findAll({
        attributes: [
          'content',
          [sequelize.fn('date_format', sequelize.col('Comment.createdAt'), '%b %d, %Y'), 'date'],
        ],
        where: { postId: post.id },
        include: [
          {
            model: db.users,
          },
        ],
        order: [
          ['createdAt', 'ASC'],
        ],
      });

      const commentsJson = comments.map((e) => e.toJSON());

      return res.render('post', {
        post: post.toJSON(), comments: commentsJson, session: req.session, layout: 'layout',
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = PostController;
