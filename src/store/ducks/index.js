import { combineReducers } from 'redux';
import { reducers as Auth } from './Auth';
import { reducers as Flavor } from './Flavor';
import { reducers as Size } from './Size';
import { reducers as Type } from './Type';
import { reducers as Cart } from './Cart';

export default combineReducers({
  Auth,
  Flavor,
  Size,
  Type,
  Cart,
});
