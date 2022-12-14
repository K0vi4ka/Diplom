import axios from 'axios'

const api = axios.create()

api.interceptors.request.use(
  (config) => {
    console.log('THET WORK')
    let token = localStorage.getItem('authtoken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);

export default api