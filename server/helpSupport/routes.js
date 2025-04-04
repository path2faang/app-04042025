const express = require('express');
const helpSupportController = require('./controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.get('/faqs', helpSupportController.getFAQs);
router.post('/tickets', authMiddleware, helpSupportController.createTicket);
router.get('/tickets', authMiddleware, helpSupportController.getTickets);
router.patch('/tickets/:id', authMiddleware, helpSupportController.updateTicketStatus);

module.exports = router;