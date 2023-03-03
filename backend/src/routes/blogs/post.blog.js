const express = require('express');
const { check, validationResult } = require('express-validator');
const CloudinaryService = require('../../services/CloudinaryService');
const BlogService = require('../../services/BlogService');

const router = express.Router();

router.post(
  '/',
  [
    check('title', 'title is Required').exists(),
    check('content', 'content is Required').exists(),
    check('poster_image', 'poster_image is Required').exists(),
    check('publisher_name', 'publisher_name is Required').exists(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, poster_image, publisher_name } = req.body;

    try {
        const image = await CloudinaryService.uploadImage(poster_image);
        const blog = await BlogService.save({ title, content, poster_image: image.url, publisher_name });

        return res.status(200).json({ blog });
    } catch (e) {
        return res.status(500).json(e);
    }
  }
);

module.exports = router;
