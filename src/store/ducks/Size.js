import { createReducer, createActions } from 'reduxsauce';
// import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadSizeRequest: null,
  loadSizeSuccess: ['data'],
});

export const sizeTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  data: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOAD_SIZE_SUCCESS]: (state, { data }) => ({ data: [...data] }),
});
