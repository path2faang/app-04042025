const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const campusManagementRoutes = require('./CampusManagement/routes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/campus-management', campusManagementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});