import { create } from 'apisauce';

import { store } from '../store';

const apiClient = create({
  baseURL: 'http://192.168.1.3:3000',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const { token } = store.getState().Auth;
  if (!token) return;
  request.headers.Authorization = `Bearer ${token}`;
});

export default apiClient;
