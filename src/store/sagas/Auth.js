import { call, put } from 'redux-saga/effects';

import authActions from '../ducks/Auth';
import client from '../../api/client';
import * as authStorage from '../../util/authStorage';
import navigate from '../../navigation/root';

export function* sagaLogin(action) {
  console.log(action);
  const { credentials } = action;
  try {
    console.log(credentials, 'credentials');
    const response = yield call(client.post, 'session', credentials);
    console.log(response, 'teste');
    yield put(authActions.loginSuccess(response.data));
    authStorage.storeUser(response.data);
    navigate('Menu');
  } catch (error) {
    console.log(`sagaLogin error ${error}`);
    // return yield put(authActions.loginFailure());
  }
}
