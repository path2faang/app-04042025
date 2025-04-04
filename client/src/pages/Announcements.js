import React, { useState, useEffect } from 'react';
import { getAnnouncements } from '../api/communication';
import { motion } from 'motion/react';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        async function fetchAnnouncements() {
            const response = await getAnnouncements();
            setAnnouncements(response.data);
        }
        fetchAnnouncements();
    }, []);

    return (
        <motion.div className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
            {announcements.map(announcement => (
                <div key={announcement._id} className="mb-3 p-3 border rounded">
                    <h3>{announcement.title}</h3>
                    <p>{announcement.content}</p>
                    <p><small>Posted by: {announcement.postedBy.name} on {new Date(announcement.timestamp).toLocaleString()}</small></p>
                </div>
            ))}
        </motion.div>
    );
}

export default Announcements;