import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['id'],
  clearCart: null,
});

export const cartTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  orders: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: (state, { item }) => ({
    orders: [...state.orders, { id: Math.random(), ...item }],
  }),
  [Types.REMOVE_ITEM]: (state, { id }) => {
    const remaining = state.orders.filter((o) => o.id !== id);
    return { orders: remaining };
  },
  [Types.CLEAR_CART]: () => ({ orders: [] }),
});
