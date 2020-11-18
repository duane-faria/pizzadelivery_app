import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['id'],
  clearCart: null,
  sendOrder: ['order'],
  getOrdersRequest: ['id'],
  getOrdersSuccess: ['orders'],
});

export const cartTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  orders: [],
  ordersAlreadySent: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: (state, { item }) => ({
    ...state,
    orders: [...state.orders, { id: Math.random(), ...item }],
  }),
  [Types.REMOVE_ITEM]: (state, { id }) => {
    const remaining = state.orders.filter((o) => o.id !== id);
    return { ...state, orders: remaining };
  },
  [Types.CLEAR_CART]: (state) => ({ ...state, orders: [] }),
  [Types.GET_ORDERS_SUCCESS]: (state, { orders }) => ({
    ...state,
    ordersAlreadySent: orders,
  }),
});
