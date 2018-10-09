const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  image: String,
  description: String,
  category: {type: String, enum: ["Traditional Art", "Digital Art", "Photography", "Literature"]}

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;