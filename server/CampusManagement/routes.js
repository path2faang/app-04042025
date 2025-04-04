const express = require('express');
const CampusManagementController = require('./controller');
const router = express.Router();

router.post('/buildings', CampusManagementController.createBuilding);
router.put('/buildings/:id', CampusManagementController.updateBuilding);
router.delete('/buildings/:id', CampusManagementController.deleteBuilding);
router.get('/buildings', CampusManagementController.listBuildings);

router.post('/rooms', CampusManagementController.createRoom);
router.put('/rooms/:id', CampusManagementController.updateRoom);
router.delete('/rooms/:id', CampusManagementController.deleteRoom);
router.get('/rooms', CampusManagementController.listRooms);
router.post('/rooms/:id/book', CampusManagementController.bookRoom);

module.exports = router;