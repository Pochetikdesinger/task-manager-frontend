import axios from 'axios';

const API_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Basic ${token}`;
  }
  return config;
});

export const register = (username, password) => {
  return api.post('/auth/register', { username, password });
};

export const createTask = (task) => {
  return api.post('/tasks', task);
};

export const getTasks = () => {
  return api.get('/tasks');
};

export const updateTask = (id, task) => {
  return api.put(`/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`);
};