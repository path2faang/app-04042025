import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const addCourse = async (courseData) => {
  const response = await axios.post(`${API_URL}/academic/courses`, courseData);
  return response.data;
};