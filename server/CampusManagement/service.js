const { Building, Room } = require('./model');

class CampusManagementService {
  async createBuilding(data) {
    const building = new Building(data);
    return await building.save();
  }

  async updateBuilding(id, data) {
    return await Building.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBuilding(id) {
    return await Building.findByIdAndDelete(id);
  }

  async getBuildings() {
    return await Building.find();
  }

  async createRoom(data) {
    const room = new Room(data);
    return await room.save();
  }

  async updateRoom(id, data) {
    return await Room.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteRoom(id) {
    return await Room.findByIdAndDelete(id);
  }

  async getRooms() {
    return await Room.find().populate('building');
  }

  async bookRoom(roomId, bookingData) {
    const room = await Room.findById(roomId);
    room.bookings.push(bookingData);
    return await room.save();
  }
}

module.exports = new CampusManagementService();