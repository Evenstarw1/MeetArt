const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: {type: String, require: true},
  image: String,
  description: String,
  location: String,
  email: String,
  role: {type: String, enum: ["Illustrator", "Writer", "Photographer"]},
  gender: {type: String, enum: ["female", "male", "robot"]},
  items: [],

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
