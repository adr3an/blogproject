const Blog = require('../models/blogs');
const { cloudinary } = require("../cloudinary");

module.exports.index = async (req, res) => {
    allBlogs = await Blog.find({});
    res.render('blogs/all', { allBlogs });
}

module.exports.view = async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('blogs/show', { blog });
}

module.exports.showEditPage = async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('blogs/edit', { blog })
}

module.exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, { ...req.body.blog });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    blog.images.push(...imgs);
    await blog.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await blog.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
    }
    req.flash('success', "Successfully edited the blog");
    res.redirect(`/blogs/${blog._id}`);
}

module.exports.addNewBlog = async (req, res) => {

    const blog = new Blog(req.body.blog);
    const day = new Date();
    const todayDate = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
    blog.date = todayDate;
    blog.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await blog.save();

    req.flash('success', "Successfully made a new blog");
    res.redirect('/blogs');

}

module.exports.newForm = (req, res) => {
    res.render('blogs/new');
}

module.exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    req.flash('success', "Successfully delete the blog");
    res.redirect('/blogs')
}
