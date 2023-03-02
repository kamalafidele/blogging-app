const express = require('express');
const BlogService = require('../../services/BlogService');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const blogs = await BlogService.getAll();

    return res.status(200).json({ blogs });
  } catch (e) {
      return res.status(500).json({ error: e.mesage });
  }
});

module.exports = router;
