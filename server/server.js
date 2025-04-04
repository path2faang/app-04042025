const express = require('express');
const mongoose = require('mongoose');
const assetRoutes = require('./assetManagement/routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use asset management routes
app.use('/api', assetRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});