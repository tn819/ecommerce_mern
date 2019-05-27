// You must pass {mergeParams: true} to the child router if you want to access the params from the parent router. 
const routes = require('express').Router({mergeParams: true});
const User = require('./mongoDB/user.model')
const db = require('./mongoDB/mongoose')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
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
