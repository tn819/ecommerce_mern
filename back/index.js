const app = require('express')();
const passport = require('passport');
const LocalStrategy = require('passport-local')
const PORT = 3002;

app.use(require('cors')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//passport config
//https://github.com/saintedlama/passport-local-mongoose/blob/master/examples/login/app.js
const User = require("./mongoDB/user.model");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
