const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        default: null 
    },
    content: {
         type: String, 
         default: null
    },
    poster_image: { 
        type: String,
        default: null
    },
    publisher_name: { 
        type: String,
        default: null
    },
 },
 { timestamps: true },
);

module.exports = mongoose.model('Blog', BlogSchema);


