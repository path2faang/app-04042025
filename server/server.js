const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const helpSupportRoutes = require('./helpSupport/routes');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/help-support', helpSupportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));