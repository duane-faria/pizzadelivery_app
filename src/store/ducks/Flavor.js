import { createReducer, createActions } from 'reduxsauce';
// import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadFlavorRequest: null,
  loadFlavorSuccess: ['data'],
});

export const flavorTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  data: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOAD_FLAVOR_SUCCESS]: (state, { data }) => {
    console.log(data);
    return data;
  },
});
