const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({

  headline: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  detailedNews: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  newsType: {
    type: String,
    required: true
  },
  hashtags: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('News', newsSchema);
