require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const userRoutes = require('./User/routes');

const app = express();

app.use(express.json());

db.then(() => {
  console.log('Connected to MongoDB');
  app.use('/api/users', userRoutes);

  app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.error(err));