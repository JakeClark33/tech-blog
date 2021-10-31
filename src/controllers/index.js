const express = require('express');
const path = require('path');
const apiRoutes = require('./api/index.js');
const htmlRoutes = require('./html/index.js');

const router = express.Router();

router.use('/public', express.static(path.join(__dirname, '../../public')));
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
