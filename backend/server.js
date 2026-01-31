
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONGO = process.env.MONGO_URI;
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const Product = require('./models/product');
const Cart = require('./models/cart');
const Order = require('./models/order');

// Routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find().limit(100).lean();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const p = await Product.findById(req.params.id).lean();
  if(!p) return res.status(404).json({error:'Not found'});
  res.json(p);
});

// Cart endpoints (simple cart per userId - userId optional; clients can pass userId)
app.get('/api/cart/:userId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.product').lean();
  res.json(cart || { items: [] });
});

app.post('/api/cart/:userId', async (req, res) => {
  const { items } = req.body;
  const userId = req.params.userId || 'guest';
  let cart = await Cart.findOne({ userId });
  if(!cart) cart = new Cart({ userId, items });
  else cart.items = items;
  await cart.save();
  res.json(cart);
});

app.post('/api/checkout/:userId', async (req, res) => {
  const userId = req.params.userId || 'guest';
  const { shipping, payment, items } = req.body;
  // compute total
  let total = 0;
  for(const it of items) total += (it.price || 0) * (it.qty || 1);
  const order = new Order({ userId, items, total, shipping, payment, status: 'confirmed', createdAt: new Date() });
  await order.save();
  // clear cart
  await Cart.findOneAndDelete({ userId });
  res.json({ success: true, orderId: order._id });
});

app.get('/api/orders/:userId', async (req, res) => {
  const userId = req.params.userId || 'guest';
  const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean();
  res.json(orders);
});

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log('Server running on', port));
