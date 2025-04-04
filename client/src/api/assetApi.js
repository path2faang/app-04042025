import axios from 'axios';

export const getAssets = async () => {
  try {
    const response = await axios.get('/api/assets');
    return response.data;
  } catch (error) {
    throw error;
  }
};