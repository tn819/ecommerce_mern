const mongoose = require('mongoose')

const SECRETS = require('../secrets.json')

// https://cloud.mongodb.com/ to check db
const mongodb_uri = `mongodb+srv://${SECRETS.ATLAS_USERNAME}:${SECRETS.ATLAS_PASSWORD}@cluster0-fubvg.mongodb.net/e-commerce-mern?retryWrites=true`

mongoose.connect(mongodb_uri, { useNewUrlParser: true });
module.exports = mongoose.connection;

