import { call, put } from 'redux-saga/effects';

import sizeActions from '../ducks/Size';
import client from '../../api/client';

export function* sizeLoad() {
  try {
    const response = yield call(client.get, 'productSize');
    response.data.sort((a, b) => {
      if (a.basePrice > b.basePrice) {
        return -1;
      }
      if (a.basePrice < b.basePrice) {
        return 1;
      }
    });
    yield put(sizeActions.loadSizeSuccess(response.data));
  } catch (error) {
    console.log(`sizeLoad error ${error}`);
  }
}
