import { create } from 'apisauce';

const apiClient = create({
  // baseURL: 'https://10.0.2.2:9000/api',
  baseURL: 'http://192.168.1.9:3000',
});

export default apiClient;
