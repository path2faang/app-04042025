const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true, enum: ['available', 'maintenance', 'allocated'] },
  purchaseDate: { type: Date },
  lastMaintenance: { type: Date },
  maintenanceSchedule: { type: Date },
  alerts: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Asset', AssetSchema);