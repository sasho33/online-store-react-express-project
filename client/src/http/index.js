import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}; // add token to localStorage after authorization

$authHost.interceptors.request.use(authInterceptor); // Add authInterceptor to $authHost

export { $host, $authHost };
