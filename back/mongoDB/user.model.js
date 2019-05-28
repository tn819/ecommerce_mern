const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//note: username and password do not need to be in schema to work

let User = new Schema({
    email: String,
    name: {
      first: String,
      last: String,
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
