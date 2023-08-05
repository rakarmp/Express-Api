// routes/quote.routes.js
const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quote.controller');

// Create a new quote
router.post('/quotes', quoteController.createQuote);

// Update a quote by ID
router.put('/quotes/:id', quoteController.updateQuote);

// Delete a quote by ID
router.delete('/quotes/:id', quoteController.deleteQuote);

// Get a quote by ID
router.get('/quotes/:id', quoteController.getQuoteById);

// Get all quotes
router.get('/quotes', quoteController.getAllQuotes);

module.exports = router;
