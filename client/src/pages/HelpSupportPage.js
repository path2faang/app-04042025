import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notification from '../components/Notification';

function HelpSupportPage() {
  const [faqs, setFaqs] = useState([]);
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    async function fetchFAQs() {
      const response = await axios.get('/api/help-support/faqs');
      setFaqs(response.data);
    }
    fetchFAQs();
  }, []);

  async function createTicket(title, description) {
    try {
      const response = await axios.post('/api/help-support/tickets', { title, description });
      setTickets([...tickets, response.data]);
      Notification.success('Ticket created successfully');
    } catch (error) {
      Notification.error('Failed to create ticket');
    }
  }

  return (
    <div>
      <h1>Help & Support</h1>
      <h2>FAQs</h2>
      <ul>
        {faqs.map(faq => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>

      <h2>Support Tickets</h2>
      <button onClick={() => createTicket('Sample Ticket', 'This is a sample issue.')}>
        Create Ticket
      </button>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>{ticket.title} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default HelpSupportPage;