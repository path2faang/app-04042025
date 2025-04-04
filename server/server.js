const express = require('express');
const mongoose = require('mongoose');
const communicationRoutes = require('./communication/routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/communication', communicationRoutes);

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(error => console.error(error));