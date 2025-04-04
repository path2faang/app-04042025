const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authenticate = require('../middleware/authenticate'); // assumed middleware for authentication

router.post('/messages', authenticate, controller.handleMessageSend);
router.get('/messages', authenticate, controller.handleGetMessages);
router.post('/announcements', authenticate, controller.handleAnnouncementPost);
router.get('/announcements', authenticate, controller.handleGetAnnouncements);

module.exports = router;