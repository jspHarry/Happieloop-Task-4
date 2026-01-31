
/*
Run: node seed/seed.js
Make sure MONGO_URI is set in environment or defaults to mongodb://localhost:27017/ecommerce_demo
*/
const mongoose = require('mongoose');
const Product = require('../models/product');
const MONGO = process.env.MONGO_URI || 'mongodb+srv://jaspinder0029_db_user:5ah2PTZ2R7r89aVH@cluster0.mjnuqzw.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> seed())
  .catch(e=> console.error(e));

async function seed(){
  const products = [
    {
      title: 'Aurora Wireless Headphones',
      description: 'Premium wireless headphones with active noise-cancellation.',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1518444021999-8f69ee0fb0cc?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Nimbus Smartwatch',
      description: 'Track health, sleep and notifications with a sleek band.',
      price: 149.00,
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Terracotta Plant Pot (Set of 2)',
      description: 'Minimalist planters for home and office decor.',
      price: 29.90,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Arc Lamp',
      description: 'Modern arc lamp with dimmable LED.',
      price: 59.50,
      image: 'https://images.unsplash.com/photo-1505691723518-34d3ad7f6f6d?w=800&q=80&auto=format&fit=crop'
    }
  ];

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products');
  mongoose.disconnect();
}
