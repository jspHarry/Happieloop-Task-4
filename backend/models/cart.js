
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
  userId: { type: String, default: 'guest' },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    price: Number,
    qty: Number,
    image: String
  }],
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Cart', CartSchema);
