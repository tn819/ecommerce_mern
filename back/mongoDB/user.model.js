const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');

//note: username and password do not need to be in schema to work

let User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator.isEmail, 'invalid email']
    },
    name: {
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      },
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
