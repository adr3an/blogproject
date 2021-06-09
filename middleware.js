const BaseJoi = require('joi');
const { blogSchema } = require('./models/blogs');
const ExpressError = require('./utils/ExpressError')
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension);

module.exports.validateBlog = (req, res, next) => {
    const blogSchema = Joi.object({
        blog: Joi.object({
            title: Joi.string().required().escapeHTML(),
            post: Joi.string().required().escapeHTML(),
            // image: Joi.string().required()
        }).required(),
        deleteImages: Joi.array()
    })
    const { error } = blogSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next()
    }
};

module.exports.isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {
        req.flash('error', 'You are not logged in');
        return res.redirect('/login');
    }
    next()
}


