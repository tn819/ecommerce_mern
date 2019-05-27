const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    name: {
      first: String,
      last: String,
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
