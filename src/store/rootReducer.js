import { combineReducers } from 'redux';
import formReducer from './forms/reducer';
import navigationReducer from './navigation/reducer';

export default combineReducers({
  forms: formReducer,
  navigation: navigationReducer,
});
