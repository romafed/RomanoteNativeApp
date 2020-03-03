import actionType from './actionType';
import { setToken } from '../navigation/actions';
import * as api from './api';

export const createUser = user => ({
  type: actionType.CREATE_USER,
  payload: api.createUser(user),
});

export const handleLogInUser = values => async dispatch => {
  try {
    const token = await api.logInUser(values);
    dispatch(setToken(token));
    dispatch({
      type: actionType.LOGIN_USER,
      payload: token,
    });
  } catch (ex) {
    throw new Error(ex);
  }
};
