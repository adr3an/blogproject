const mongoose = require('mongoose');

const { Schema } = mongoose;


const ImageSchema = new Schema({
    url: String,
    filename: String
})
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
})
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    images: [ImageSchema],
    date: {
        type: String
    }
});


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;