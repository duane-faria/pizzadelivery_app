import { combineReducers } from 'redux';
import { reducers as Auth } from './Auth';
import { reducers as Flavor } from './Flavor';

export default combineReducers({
  Auth,
  Flavor,
});
