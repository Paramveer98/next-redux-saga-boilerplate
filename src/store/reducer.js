import { combineReducers } from 'redux';
import signupReducer from '../containers/signup/reducer';
import homeReducer from '../containers/home/reducer';

const rootReducer = combineReducers({
  signup: {},
  home: homeReducer
});

export default rootReducer;
