const express = require('express');
const assetController = require('./controller');
const router = express.Router();

router.post('/assets', assetController.createAsset);
router.get('/assets', assetController.getAssets);
router.get('/assets/:id', assetController.getAssetById);
router.put('/assets/:id', assetController.updateAsset);
router.delete('/assets/:id', assetController.deleteAsset);

module.exports = router;