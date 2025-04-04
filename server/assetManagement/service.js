const Asset = require('./model');

async function createAsset(data) {
  return await Asset.create(data);
}

async function getAssets() {
  return await Asset.find();
}

async function getAssetById(id) {
  return await Asset.findById(id);
}

async function updateAsset(id, data) {
  return await Asset.findByIdAndUpdate(id, data, { new: true });
}

async function deleteAsset(id) {
  return await Asset.findByIdAndDelete(id);
}

module.exports = {
  createAsset,
  getAssets,
  getAssetById,
  updateAsset,
  deleteAsset
};