const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
    title: String,
    image: String,
    description: String, 
    keywords: [String],
    location: String,
    type: String,
    price: Number,
    about: String,
    wanted: {
      ageFrom: Number,
      ageTo: Number,
      sex: String,
      lifestage: String,
      description: String,

    },
    //not sure if I need to import user schema if its referenced
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('item', itemSchema);
