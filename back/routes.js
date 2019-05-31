// You must pass {mergeParams: true} to the child router if you want to access the params from the parent router. 
const routes = require('express').Router({mergeParams: true});
const User = require('./mongoDB/user.model');
const Item = require('./mongoDB/item.model');
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
      console.log('req.session ',req.session);
      res.json(req.session.passport);
    });
  }) 
});

routes.post('/add', (req, res)=> {
  console.log("adding item", req.body);
  const {title, description, keywords, location, type, price, about, image, wanted} = req.body
  let newItem = new Item({
    title,
    description,
    keywords,
    location,
    type,
    price,
    about,
    image,
    wanted,
  });
  newItem.save((err, item) => { 
    if(err){return console.log(err)};
    console.log("item added");
    res.json(item)
  }) 
});

routes.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.session.passport)
});

routes.get('/isloggedin', (req,res) => {
  console.log("in is logged in", req.session);
  if(req.session.passport){
    res.json({...req.session.passport, success: true});
  }
  else {
    res.json({success: false});
  }
})

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/");
});

routes.post('/items', (req, res) => {
  Item.find({}, (err, items) => res.json(items))
});

db.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

module.exports = routes;
