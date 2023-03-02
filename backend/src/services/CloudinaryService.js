const cloudinary = require('cloudinary').v2;

const { CLOUDINARY_KEY, CLOUDINARY_SECRET, CLOUDNIARY_NAME } = process.env;

cloudinary.config({
    cloud_name: CLOUDNIARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET,
})

class CloudinaryService {
    static async uploadImage(imageData) {
        return cloudinary.uploader.upload(imageData, {
            folder: '/users/images',
            allowed_formats: ['png', 'jpg', 'webp', 'svg', 'jfif'],
        });
    }
}

module.exports = CloudinaryService;
