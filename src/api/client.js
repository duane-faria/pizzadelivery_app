import { create } from 'apisauce';

import { getUser } from '../util/authStorage';

const apiClient = create({
  // baseURL: 'https://10.0.2.2:9000/api',
  baseURL: 'http://192.168.1.9:3000',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const auth = await getUser();
  if (!auth || !auth.token) return;
  request.headers.Authorization = `Bearer ${auth.token}`;
});

export default apiClient;
