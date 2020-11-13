import { all, takeLatest } from 'redux-saga/effects';
import authActions from '../ducks/Auth';
import { sagaLogin } from './Auth';

export default function* rootSaga() {
  yield all([takeLatest(authActions.loginRequest, sagaLogin)]);
}
