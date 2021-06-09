const User = require('../models/users');
const passport = require('passport');

module.exports.showRegistrationFrom = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const newUser = new User({ email, username })
        registeredUser = await User.register(newUser, password);
        // req.login(registeredUser, err => {
        //     if (err) return next(err);
        // })
        req.flash('success', 'Welcome to Aaliyah Speaks Blog');
        res.redirect('/blogs');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }

}

module.exports.showLoginForm = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/blogs');
}

module.exports.logout = function (req, res) {
    req.logout();
    req.flash('success', 'Goodbye!');
    res.redirect('/blogs');
}