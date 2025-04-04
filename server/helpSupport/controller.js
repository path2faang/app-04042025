const helpSupportService = require('./service');

class HelpSupportController {
  async getFAQs(req, res) {
    try {
      const faqs = await helpSupportService.getFAQs();
      res.json(faqs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTicket(req, res) {
    const { title, description } = req.body;
    try {
      const ticket = await helpSupportService.createTicket(req.user.id, title, description);
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTickets(req, res) {
    try {
      const tickets = await helpSupportService.getTicketsByUser(req.user.id);
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTicketStatus(req, res) {
    const { status } = req.body;
    try {
      const ticket = await helpSupportService.updateTicketStatus(req.params.id, status);
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new HelpSupportController();