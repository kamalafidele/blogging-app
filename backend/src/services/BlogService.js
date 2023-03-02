const BlogRepo = require('../repositories/BlogRepo');

class BlogService {
    static async save(data) {
        return BlogRepo.save(data);
    }

    static async getAll() {
        return BlogRepo.findAll();
    }

    static async getById(id) {
        return BlogRepo.findById(id);
    }

    static async updateById(id, data) {
        return BlogRepo.updateById(id, data);
    }

    static async deleteById(id) {
        return BlogRepo.deleteById(id);
    }
}

module.exports = BlogService;
