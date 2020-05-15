import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_API || 'https://cors-anywhere.herokuapp.com/https://neomedic.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
