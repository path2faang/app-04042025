const { Message, Announcement } = require('./model');

async function sendMessage(sender, receiver, content) {
    const message = new Message({ sender, receiver, content });
    return await message.save();
}

async function getMessagesForUser(userId) {
    return await Message.find({ 
        $or: [{ sender: userId }, { receiver: userId }] 
    }).populate('sender receiver');
}

async function postAnnouncement(title, content, postedBy) {
    const announcement = new Announcement({ title, content, postedBy });
    return await announcement.save();
}

async function getAllAnnouncements() {
    return await Announcement.find().populate('postedBy');
}

module.exports = {
    sendMessage,
    getMessagesForUser,
    postAnnouncement,
    getAllAnnouncements
};