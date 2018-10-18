const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentsSchema = new Schema({
  username: String,
  comment: String,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;