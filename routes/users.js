const express = require('express');
const router = express.Router();
const User = require('../models/users');
const cathcAsync = require('../utils/catchAsync')
const passport = require('passport');
const users = require('../controllers/users');
const { isLoggedIn } = require('../middleware')
router.route('/register')
    .get(isLoggedIn, (users.showRegistrationFrom))
    .post(isLoggedIn, cathcAsync(users.register));

router.route('/login')
    .get((users.showLoginForm))
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (users.login));

router.get('/logout', (users.logout));

module.exports = router;