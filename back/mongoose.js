const mongoose = require('mongoose')

const SECRETS = require('./secrets.json')

const mongodb_uri = `mongodb+srv://${SECRETS.ATLAS_USERNAME}:${SECRETS.ATLAS_PASSWORD}@cluster0-fubvg.mongodb.net/test?retryWrites=true`

mongoose.connect(mongodb_uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})