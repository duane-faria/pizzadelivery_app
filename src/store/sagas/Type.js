import { call, put } from 'redux-saga/effects';

import typeActions from '../ducks/Type';
import client from '../../api/client';

export function* typeLoad() {
  try {
    const response = yield call(client.get, 'product');
    yield put(typeActions.loadTypeSuccess(response.data));
  } catch (error) {
    console.log(`typeLoad error ${error}`);
  }
}
