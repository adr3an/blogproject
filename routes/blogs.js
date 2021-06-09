const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const mongoose = require('mongoose');
const Blog = require('../models/blogs');
const methodOverride = require('method-override');
//const Joi = require('joi');
const { validateBlog, isLoggedIn } = require('../middleware');
const blogs = require('../controllers/blogs')
const multer = require('multer')
const { storage } = require('../cloudinary');
const upload = multer({ storage });

//code to form to add new blog post
router.get('/new', isLoggedIn, (blogs.newForm));

//code to show all blog posts
router.route('/')
    .get(catchAsync(blogs.index))
    .post(isLoggedIn, upload.array('image'), validateBlog, catchAsync(blogs.addNewBlog));

//code to create edit blog posts form  
router.get('/:id/edit', isLoggedIn, catchAsync(blogs.showEditPage));


//code to view each individual blog posts
router.route('/:id')
    .get(catchAsync(blogs.view))
    .put(isLoggedIn, upload.array('image'), validateBlog, catchAsync(blogs.updateBlog))
    .delete(catchAsync(blogs.deleteBlog));


module.exports = router;