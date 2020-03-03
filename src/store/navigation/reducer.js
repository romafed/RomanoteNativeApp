import actionType from './actionType';

const initialState = {
  loading: false,
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.CHECK_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionType.CHECK_TOKEN_FULFILLED:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case actionType.CHECK_TOKEN_REJECTED:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case actionType.SET_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionType.SET_TOKEN_FULFILLED:
      console.log(payload);
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case actionType.SET_TOKEN_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
