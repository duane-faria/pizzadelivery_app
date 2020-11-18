import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendOrderRequest: ['order'],
});

export const cartTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  orders: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.SEND_ORDER_SU]: (state, { item }) => ({
    orders: [...state.orders, { id: Math.random(), ...item }],
  }),
});
