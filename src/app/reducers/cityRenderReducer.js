import { createReducer } from 'redux-create-reducer';
import { CITY_STATE, FORM_STATE } from '../actions/cityState';

const initialState = false;
const cityRenderReducer = createReducer(initialState, {
  [CITY_STATE]: () => false,
  [FORM_STATE]: () => true,
});

export default cityRenderReducer;
