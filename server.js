const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import library cors
const quoteRoutes = require('./app/routes/quote.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'MONGODBURL'; // Ganti dengan URL MongoDB Anda

app.use(express.json());

// Menambahkan middleware CORS ke aplikasi
app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', quoteRoutes);

app.get('/api/quote', (req, res) => {
    res.json({message: "Connect Berhasil"})
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
