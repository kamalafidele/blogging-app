const express = require('express');
const BlogService = require('../../services/BlogService');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const blog = await BlogService.getById(id);
        return res.status(200).json({ blog });
    } catch {
        return res.status(500).json({ error: e.mesage });
    }
});

module.exports = router;
