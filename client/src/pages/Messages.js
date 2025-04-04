import React, { useState, useEffect } from 'react';
import { getMessages } from '../api/communication';
import { motion } from 'motion/react';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchMessages() {
            const response = await getMessages();
            setMessages(response.data);
        }
        fetchMessages();
    }, []);

    return (
        <motion.div className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Messages</h2>
            {messages.map(message => (
                <div key={message._id} className="mb-3 p-3 border rounded">
                    <p><strong>From:</strong> {message.sender.name}</p>
                    <p><strong>To:</strong> {message.receiver.name}</p>
                    <p>{message.content}</p>
                    <p><small>{new Date(message.timestamp).toLocaleString()}</small></p>
                </div>
            ))}
        </motion.div>
    );
}

export default Messages;