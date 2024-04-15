import axios, { AxiosRequestHeaders } from 'axios';

export const HOST = 'http://localhost:3001';

export const api = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('@Auth:access_token');
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
