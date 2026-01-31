🚀 MINIMAL E-SHOP — Full Stack E-Commerce App

<h1 align="center"><b>🛒 Minimal E-Shop</b></h1> <p align="center"> A modern, lightweight full-stack e-commerce application with product browsing, cart management, and order checkout. </p> <p align="center"> <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js"/> <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express"/> <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb"/> <img src="https://img.shields.io/badge/TailwindCSS-Frontend-blue?style=for-the-badge&logo=tailwindcss"/> </p>
📌 Project Overview

Minimal E-Shop is a full-stack e-commerce web application that allows users to:

Browse products

Add items to a cart

Manage quantities

Checkout and place orders

View previous orders

It is built with Node.js, Express, MongoDB, and a TailwindCSS frontend, making it lightweight, fast, and easy to scale.

✨ Features

✅ Product listing
✅ Product details view
✅ Add to cart
✅ Update cart quantities
✅ Remove items from cart
✅ Checkout system
✅ Order history
✅ Backend cart sync
✅ MongoDB database integration
✅ Responsive UI with TailwindCSS

🛠 Tech Stack
🔹 Frontend

HTML5

Tailwind CSS

Vanilla JavaScript

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

Body Parser

CORS

Dotenv

📂 Project Structure
Task 4/
│
├── backend/
│   ├── models/
│   │   ├── product.js
│   │   ├── cart.js
│   │   └── order.js
│   ├── seed/
│   │   └── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    └── index.html

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/minimal-eshop.git
cd minimal-eshop/backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file inside /backend:

MONGO_URI=your_mongodb_connection_string
PORT=4000

4️⃣ Seed the Database
npm run seed

5️⃣ Start the Server
npm start


Server runs at:

http://localhost:4000


Open the frontend:

frontend/index.html

🔌 API Endpoints
📦 Products
GET /api/products
GET /api/products/:id

🛒 Cart
GET /api/cart/:userId
POST /api/cart/:userId

💳 Checkout
POST /api/checkout/:userId

📜 Orders
GET /api/orders/:userId

🧠 How It Works

Products are fetched from MongoDB

Cart is stored in localStorage and synced with backend

Checkout creates an order and clears the cart

Orders are stored and retrievable per user

🚀 Future Improvements

User authentication

Payment gateway integration

Admin dashboard

Product search & filters

Wishlist feature

Deployment to cloud

🤝 Contributing

Contributions are welcome!
Fork the repo and submit a pull request.
