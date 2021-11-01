const sequelize = require('sequelize');
const db = require('../models');
const user = require('../models/user');

class PostController {
  static async get(req, res, _next) {
    const post = await db.posts.findOne({
      attributes: [
        'title',
        'content',
        'image_seed',
        'author_id',
        [sequelize.fn('date_format', sequelize.col('createdAt'), '%b %d, %Y'), 'date'],
      ],
      // include: [{
      //   model: db.users,
      // }],
      where: { slug: req.params.slug },
      raw: true,
    });

    console.log(post);

    return res.render('post', { post, session: req.session, layout: 'layout' });
  }
}

module.exports = PostController;
