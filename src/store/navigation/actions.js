import actionType from './actionType';
import * as api from './api';

export const checkToken = () => ({
  type: actionType.CHECK_TOKEN,
  payload: api.getToken(),
});

export const setToken = token => ({
  type: actionType.SET_TOKEN,
  payload: token ? api.setToken(token) : api.removeToken(),
});
