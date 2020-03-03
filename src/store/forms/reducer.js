import actionType from './actionType';

const initialState = {
  loading: false,
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.CREATE_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionType.CREATE_USER_FULFILLED:
      return {
        ...state,
        loading: false,
      };
    case actionType.CREATE_USER_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case actionType.LOGIN_USER:
      const user = JSON.parse(payload);
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};
