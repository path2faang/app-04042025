const express = require('express');
const { addCourse } = require('./controller');

const router = express.Router();

router.post('/courses', addCourse);

module.exports = router;