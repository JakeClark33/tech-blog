const sequelize = require('sequelize');
const db = require('../models');

class PostController {
  static async get(req, res, _next) {
    const post = await db.posts.findOne({
      attributes: [
        'title',
        'content',
        'imageSeed',
        'userId',
        [sequelize.fn('date_format', sequelize.col('Post.createdAt'), '%b %d, %Y'), 'date'],
      ],
      include: [{
        model: db.users,
      }],
      where: { slug: req.params.slug },
    });

    return res.render('post', { post: post.toJSON(), session: req.session, layout: 'layout' });
  }
}

module.exports = PostController;
