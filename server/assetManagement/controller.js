const assetService = require('./service');

async function createAsset(req, res) {
  try {
    const asset = await assetService.createAsset(req.body);
    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAssets(req, res) {
  try {
    const assets = await assetService.getAssets();
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAssetById(req, res) {
  try {
    const asset = await assetService.getAssetById(req.params.id);
    if (asset) {
      res.status(200).json(asset);
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateAsset(req, res) {
  try {
    const updatedAsset = await assetService.updateAsset(req.params.id, req.body);
    if (updatedAsset) {
      res.status(200).json(updatedAsset);
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteAsset(req, res) {
  try {
    const deletedAsset = await assetService.deleteAsset(req.params.id);
    if (deletedAsset) {
      res.status(200).json({ message: 'Asset deleted successfully' });
    } else {
      res.status(404).json({ message: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createAsset, getAssets, getAssetById, updateAsset, deleteAsset };