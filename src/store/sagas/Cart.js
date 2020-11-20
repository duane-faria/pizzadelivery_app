import { call, put, select } from 'redux-saga/effects';

import cartActions from '../ducks/Cart';
import client from '../../api/client';

export function* sendOrder({ order }) {
  let total = 0;
  const newOrder = {};
  newOrder.note = order.observation;
  const items = order.data.map((o) => {
    total += o.price;
    return {
      product: o.productId,
      size: o.sizeId,
      type: o.flavorId,
    };
  });
  newOrder.price = total;
  newOrder.status = 'pedido';
  newOrder.items = items;
  newOrder.street = order.street;
  newOrder.number = order.number;
  newOrder.district = order.district;
  newOrder.cep = order.cep;
  try {
    const response = yield call(client.post, 'order', newOrder);
    yield put(cartActions.clearCart());
  } catch (error) {
    console.log(`sendOrder error ${error}`);
  }
}

export function* getOrders() {
  try {
    const { id } = yield select((state) => state.Auth);
    const response = yield call(client.get, `order/${id}`);
    yield put(cartActions.getOrdersSuccess(response.data));
  } catch (error) {
    console.log(`getOrders error ${error}`);
  }
}
