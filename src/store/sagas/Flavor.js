import { call, put } from 'redux-saga/effects';

import flavorActions from '../ducks/Flavor';
import client from '../../api/client';

export function* flavorLoad() {
  try {
    const response = yield call(client.get, 'productType');
    yield put(flavorActions.loadFlavorSuccess(response.data));
  } catch (error) {
    console.log(`flavorLoad error ${error}`);
  }
}
