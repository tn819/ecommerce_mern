const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    sku: String,
    name: String,
    description: String, 
    price: Number,
    //not sure if I need to import user schema if its referenced
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
