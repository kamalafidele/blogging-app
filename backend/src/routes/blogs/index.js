const router = require('express').Router();

router.use('/', require('./post.blog'));
router.use('/', require('./get.blog[id]'));
router.use('/', require('./get.blogs'));

module.exports = router;
