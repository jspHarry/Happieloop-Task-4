
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  userId: { type: String, default: 'guest' },
  items: [{ title: String, price: Number, qty: Number, image: String }],
  total: Number,
  shipping: Object,
  payment: Object,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
