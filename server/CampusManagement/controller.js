const CampusManagementService = require('./service');

class CampusManagementController {
  async createBuilding(req, res) {
    try {
      const building = await CampusManagementService.createBuilding(req.body);
      res.status(201).json(building);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBuilding(req, res) {
    try {
      const building = await CampusManagementService.updateBuilding(req.params.id, req.body);
      res.status(200).json(building);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBuilding(req, res) {
    try {
      await CampusManagementService.deleteBuilding(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async listBuildings(req, res) {
    try {
      const buildings = await CampusManagementService.getBuildings();
      res.status(200).json(buildings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createRoom(req, res) {
    try {
      const room = await CampusManagementService.createRoom(req.body);
      res.status(201).json(room);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateRoom(req, res) {
    try {
      const room = await CampusManagementService.updateRoom(req.params.id, req.body);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteRoom(req, res) {
    try {
      await CampusManagementService.deleteRoom(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async listRooms(req, res) {
    try {
      const rooms = await CampusManagementService.getRooms();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async bookRoom(req, res) {
    try {
      const room = await CampusManagementService.bookRoom(
        req.params.id,
        { user: req.user._id, ...req.body }
      );
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CampusManagementController();