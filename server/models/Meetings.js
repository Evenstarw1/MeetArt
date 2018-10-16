const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const meetingsSchema = new Schema({
  place: String,
  location: { type: { type: String }, coordinates: [Number] },
  date: Date,
  time: String,
  name: String,
  description: String,
  category: {type: String, enum: ["Drawing", "Painting", "Photography", "Writing"]}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
meetingsSchema.index({ location: '2dsphere' });

const Meetings = mongoose.model('Meetings', meetingsSchema);
module.exports = Meetings;