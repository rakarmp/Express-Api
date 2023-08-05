// controllers/quote.controller.js
const Quote = require('../models/quote.model');

// Create a new quote
exports.createQuote = async (req, res) => {
  try {
    const { text, author } = req.body;
    const newQuote = new Quote({ text, author });
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(500).json({ message: 'Error creating quote', error: err });
  }
};

// Update a quote by ID
exports.updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, author } = req.body;
    const updatedQuote = await Quote.findByIdAndUpdate(id, { text, author }, { new: true });
    res.json(updatedQuote);
  } catch (err) {
    res.status(500).json({ message: 'Error updating quote', error: err });
  }
};

// Delete a quote by ID
exports.deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    await Quote.findByIdAndDelete(id);
    res.json({ message: 'Quote deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting quote', error: err });
  }
};

// Get a quote by ID
exports.getQuoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById(id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.json(quote);
  } catch (err) {
    res.status(500).json({ message: 'Error getting quote', error: err });
  }
};

// Get all quotes
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: 'Error getting quotes', error: err });
  }
};
