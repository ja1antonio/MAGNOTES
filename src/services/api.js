import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-k7gg.onrender.com',
});
