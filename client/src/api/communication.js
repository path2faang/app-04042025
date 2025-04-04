import axios from 'axios';

const API_URL = '/api/communication';

export const sendMessage = async (sender, receiver, content) => {
    return await axios.post(`${API_URL}/messages`, { sender, receiver, content });
};

export const getMessages = async () => {
    return await axios.get(`${API_URL}/messages`);
};

export const postAnnouncement = async (title, content) => {
    return await axios.post(`${API_URL}/announcements`, { title, content });
};

export const getAnnouncements = async () => {
    return await axios.get(`${API_URL}/announcements`);
};