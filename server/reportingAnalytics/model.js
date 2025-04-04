const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportType: { type: String, required: true },
    parameters: { type: Map, of: String },
    generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    generatedAt: { type: Date, default: Date.now },
    resultData: { type: Object },
});

module.exports = mongoose.model('Report', reportSchema);