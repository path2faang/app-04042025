const mongoose = require('mongoose');

const BuildingSchema = new mongoose.Schema({
  name: String,
  location: String,
  facilities: [String],
});

const RoomSchema = new mongoose.Schema({
  name: String,
  building: { type: mongoose.Schema.Types.ObjectId, ref: 'Building' },
  capacity: Number,
  resources: [String],
  bookings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    duration: Number
  }]
});

const Building = mongoose.model('Building', BuildingSchema);
const Room = mongoose.model('Room', RoomSchema);

module.exports = { Building, Room };