const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FlashcardSchema = new Schema({
  word: {
    type: String
  },
  meaning: {
    type: String
  },
  sort_order: {
    type: Number
  }
})

// Create Schema
const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  flashcards: {
    type: [FlashcardSchema]
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Topic = mongoose.model('topic', TopicSchema)