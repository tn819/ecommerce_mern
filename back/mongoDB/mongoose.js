const mongoose = require('mongoose')

let secrets;
if (process.env.NODE_ENV === 'production') {
  secrets = process.env; // in prod the secrets are environment variables
} else {
  secrets = require('../secrets.json'); // secrets.json is in .gitignore
}

// https://cloud.mongodb.com/ to check db
const mongodb_uri = `mongodb+srv://${secrets.ATLAS_USERNAME}:${secrets.ATLAS_PASSWORD}@cluster0-fubvg.mongodb.net/e-commerce-mern?retryWrites=true`

mongoose.connect(mongodb_uri, { useNewUrlParser: true });
module.exports = mongoose.connection;

