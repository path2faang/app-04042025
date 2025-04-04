const express = require('express');
const { generateReport, getReport, getReports } = require('./controller');
const router = express.Router();
const { isAuthenticated } = require('../middleware/authentication');

router.post('/generate', isAuthenticated, generateReport);
router.get('/:id', isAuthenticated, getReport);
router.get('/', isAuthenticated, getReports);

module.exports = router;