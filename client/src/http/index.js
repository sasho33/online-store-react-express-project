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
}; // Add authorization header to request object for authorization purposes

$authHost.interceptors.request.use(authInterceptor); // Add authInterceptor to $authHost

export { $host, $authHost };
