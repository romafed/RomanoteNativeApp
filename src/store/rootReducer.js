import { combineReducers } from 'redux';
import formReducer from './forms/reducer';

export default combineReducers({
  forms: formReducer,
});
