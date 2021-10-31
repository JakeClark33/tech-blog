const express = require('express');

const router = express.Router();

const blogs = [
  {
    id: 2,
    title: 'My First Post',
    content: 'Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 3,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 4,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 5,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 6,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 7,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 8,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 9,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 10,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 11,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 12,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 13,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
  {
    id: 14,
    title: 'test 3',
    content: 'lorem ipsum',
    createdBy: 'Creator',
    createdOn: 1234431432,
  },
];

router.route('/')
  .get((req, res) => res.render('blog-list', { blogs, session: req.session, layout: 'layout' }));

router.route('/blog/:id')
  .get((req, res) => {
    const blogId = parseInt(req.params.id, 10);
    const blog = blogs.find((item) => item.id === blogId);
    return res.render('blog', { blog, session: req.session, layout: 'layout' });
  });

router.route('/**')
  .get((req, res) => res.render('404', { layout: 'layout' }));

module.exports = router;
