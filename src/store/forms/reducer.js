import actionType from './actionType';

const initialState = {
  loading: false,
  token: null,
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
        loading: true,
      };
    case actionType.LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionType.LOGIN_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case actionType.LOGIN_USER_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
