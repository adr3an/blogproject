if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const helmet = require("helmet");
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');
const session = require('express-session');
const flash = require('connect-flash');
const blogRoutes = require('./routes/blogs');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/users')
const userRoutes = require('./routes/users')
const mongoSanitize = require('express-mongo-sanitize');
const MongoDBStore = require('connect-mongo');

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Mongo connected");
    })
    .catch(err => {
        console.log(err);
    })


// App Setters and key middlewares

//allows view directory to be default directories for ejs files 
app.set('views', path.join(__dirname, 'views'));
//allows app to know files are ejs
app.set('view engine', "ejs");
//allows express to capture data from the actual ejs pages
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));

const secret = process.env.SECRET;

const store = new MongoDBStore({
    mongoUrl: dbUrl,
    secret: 'secret',
    touchAfter: 24 * 3600
});

store.on("error", function (e) {
    console.log("Session Store Error!");
});


const sessionOptions = {
    name: '_session',
    store,
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }

}
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.user;

    next();
})
app.use(helmet(
    {
        contentSecurityPolicy: false,
    }
));

app.use("/blogs", blogRoutes);
app.use("/", userRoutes);


app.get('/home', (req, res) => {
    res.render('blogs/index');
});

app.get('/about', (req, res) => {
    res.render('static/about');
})

app.get('/', (req, res) => {
    res.redirect("/blogs");
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found'), 404)
});
app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).render('error', { err });
});

app.use(mongoSanitize({
    replaceWith: '_'
}))
const port = process.env.Port;
app.listen(port, () => {
    console.log(`Port ${port} is live`);
});



