const mongoose = require('mongoose');

// Define the structure for a Vocabulary Card
const cardSchema = new mongoose.Schema({
  word: { 
    type: String, 
    required: true,
    unique: true 
  },
  definition: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  difficultyLevel: { 
    type: String, 
    default: 'Beginner',
    enum: ['Beginner', 'Intermediate', 'Advanced']
  }
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);