const { FAQ, Ticket } = require('./model');

class HelpSupportService {
  async getFAQs() {
    return FAQ.find();
  }

  async createTicket(userId, title, description) {
    const ticket = new Ticket({ user: userId, title, description });
    return ticket.save();
  }

  async getTicketsByUser(userId) {
    return Ticket.find({ user: userId });
  }

  async updateTicketStatus(ticketId, status) {
    return Ticket.findByIdAndUpdate(ticketId, { status, updatedAt: Date.now() }, { new: true });
  }
}

module.exports = new HelpSupportService();