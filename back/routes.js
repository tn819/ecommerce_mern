// You must pass {mergeParams: true} to the child router if you want to access the params from the parent router. 
const routes = require('express').Router({mergeParams: true});
const User = require('./mongoDB/user.model');
const db = require('./mongoDB/mongoose');
const passport = require('passport');

routes.get('/', (req, res) => {
  console.log(req.session);
  
  res.status(200).json({ message: 'Connected!' });
});

//https://mherman.org/blog/user-authentication-with-passport-dot-js/#add-registerjade

routes.post('/register', (req, res)=> {
  console.log("registering user", req.body);
  let newUser = new User({
    username: req.body.username,
    email: req.body.email, 
    name: {
      first: req.body.firstname, 
      last: req.body.lastname
    }
  });
  User.register(newUser, req.body.password, function(err, user) { 
    if(err){return console.log(err)};
    console.log("user registered");
    passport.authenticate('local')(req, res, function () {
      console.log(req.session);
      res.redirect('/');
    });
  }) 
});

routes.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({"success": true})
});

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/");
});

routes.get('/users', (req, res) => {
  User.find({'name.first': 'john'}, (err, users) => {
    if(err) return console.log(err)
    res.status(200).json({ users });
  })  
});

routes.post('/users', (req, res) => {
  console.log(req.body)
  // // below code works - just need to make it dynamic
  // const newUser = new User({name: {first: 'john',last:'braam'}, email: 'test@test.com'})
  // newUser.save((err, user) => {
  //   if(err) return console.log(err)
  //   console.log(user.name.first+' was added');
  // })
});

db.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

module.exports = routes;
