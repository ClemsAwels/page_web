import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred');
    }
};
