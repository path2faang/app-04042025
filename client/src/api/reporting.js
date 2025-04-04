import axios from 'axios';

const API_URL = '/api/reporting';

export const generateReport = async (reportType, parameters) => {
    const response = await axios.post(`${API_URL}/generate`, { reportType, parameters });
    return response.data;
};

export const fetchReportById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const fetchAllReports = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};