import { all, takeLatest } from 'redux-saga/effects';
import { authTypes } from '../ducks/Auth';
import { flavorTypes } from '../ducks/Flavor';
import { sizeTypes } from '../ducks/Size';
import { typeTypes } from '../ducks/Type';
import { sagaLogin } from './Auth';
import { flavorLoad } from './Flavor';
import { sizeLoad } from './Size';
import { typeLoad } from './Type';

export default function* rootSaga() {
  yield all([
    takeLatest(authTypes.LOGIN_REQUEST, sagaLogin),
    takeLatest(flavorTypes.LOAD_FLAVOR_REQUEST, flavorLoad),
    takeLatest(sizeTypes.LOAD_SIZE_REQUEST, sizeLoad),
    takeLatest(typeTypes.LOAD_TYPE_REQUEST, typeLoad),
  ]);
}
