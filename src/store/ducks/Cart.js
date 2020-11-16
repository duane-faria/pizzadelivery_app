import { createReducer, createActions } from 'reduxsauce';
// import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItem: ['item'],
});

export const cartTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  orders: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: (state, { item }) => ({
    orders: [{ id: Math.random(), ...item }],
  }),
});
