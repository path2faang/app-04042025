const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'faculty', 'staff', 'admin'], default: 'student' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);