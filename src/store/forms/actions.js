import actionType from './actionType';
import * as api from './api';

export const createUser = user => ({
  type: actionType.CREATE_USER,
  payload: api.createUser(user),
});

export const logInUser = values => ({
  type: actionType.LOGIN_USER,
  payload: api.logInUser(values),
});
