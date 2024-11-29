import axios from 'axios';

const backendURL = process.env.REACT_APP_BACKEND_URL;

export const register = async (username, password) => {
    try {
        const response = await axios.post(`${backendURL}/register`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred during registration');
    }
};
