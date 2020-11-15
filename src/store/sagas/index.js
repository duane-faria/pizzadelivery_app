import { all, takeLatest } from 'redux-saga/effects';
import authActions from '../ducks/Auth';
import flavorActions from '../ducks/Flavor';
import { sagaLogin } from './Auth';
import { flavorLoad } from './Flavor';

export default function* rootSaga() {
  yield all([
    takeLatest(authActions.loginRequest, sagaLogin),
    takeLatest(flavorActions.loadFlavorRequest, flavorLoad),
  ]);
}
