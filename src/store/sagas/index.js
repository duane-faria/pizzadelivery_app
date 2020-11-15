import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../ducks/Auth';
import { flavorTypes } from '../ducks/Flavor';
import { sagaLogin } from './Auth';
import { flavorLoad } from './Flavor';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, sagaLogin),
    takeLatest(flavorTypes.LOAD_FLAVOR_REQUEST, flavorLoad),
  ]);
}
