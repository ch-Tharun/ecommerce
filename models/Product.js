const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },  // URL to the product image
  stock: { type: Number, default: 0 }, // Number of items in stock
  category: { type: String },
  discount: { type: Number, default: 0}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
