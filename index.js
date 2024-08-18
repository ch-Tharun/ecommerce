const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend URL
// }));
app.use(cors());
// app.use((req, res, next) => { res.header({"Access-Control-Allow-Origin": "*"}); next(); })
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productRoutes');

// Use routes
app.use('/api/products', productRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
