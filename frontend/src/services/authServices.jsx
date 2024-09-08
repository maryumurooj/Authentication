import axios from 'axios';

const API_URL = 'http://localhost:5251/api/Auth/'; // Adjust this URL if necessary

const signup = async (userData) => {
    return await axios.post(API_URL + 'register', userData);
};

const login = async (credentials) => {
    return await axios.post(API_URL + 'login', credentials);
};

export default { signup, login };
