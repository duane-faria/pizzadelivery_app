import client from './client';

const login = (email, password) => client.post('/session', { email, password });

const register = (user) => client.post('/user', user);

export default {
  login,
  register,
};
