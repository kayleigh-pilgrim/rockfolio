require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri).catch((err) => console.error('MongoDB connection error:', err));

const stoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A stone name is required.'],
    trim: true,
    maxlength: [200, 'The stone name must be 200 characters or fewer.'],
  },
});

stoneSchema.index(
  { name: 1 },
  {
    unique: true,
    collation: { locale: 'en', strength: 2 },
  },
);

module.exports = mongoose.model('Stone', stoneSchema);
