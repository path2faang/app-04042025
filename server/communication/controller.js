const service = require('./service');

async function handleMessageSend(req, res) {
    try {
        const { sender, receiver, content } = req.body;
        const message = await service.sendMessage(sender, receiver, content);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function handleGetMessages(req, res) {
    try {
        const userId = req.user.id;
        const messages = await service.getMessagesForUser(userId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function handleAnnouncementPost(req, res) {
    try {
        const { title, content } = req.body;
        const postedBy = req.user.id;
        const announcement = await service.postAnnouncement(title, content, postedBy);
        res.status(201).json(announcement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function handleGetAnnouncements(req, res) {
    try {
        const announcements = await service.getAllAnnouncements();
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handleMessageSend,
    handleGetMessages,
    handleAnnouncementPost,
    handleGetAnnouncements
};