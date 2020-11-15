import { combineReducers } from 'redux';
import { reducers as Auth } from './Auth';
import { reducers as Flavor } from './Flavor';
import { reducers as Size } from './Size';

export default combineReducers({
  Auth,
  Flavor,
  Size,
});
