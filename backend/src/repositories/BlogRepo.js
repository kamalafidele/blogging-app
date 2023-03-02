const Blog = require('../models/Blog');

class BlogRepo {
  static async save(data) {
    return Blog.create(data);
  }

  static async findAll() {
    return Blog.find().exec();
  }

  static async findById(id) {
    return Blog.findById(id);
  }

  static async updateById(id, data) {
    return Blog.findByIdAndUpdate(id, data);
  }

  static async deleteById(id) {
    return Blog.findByIdAndDelete(id);
  }
}

module.exports = BlogRepo;
