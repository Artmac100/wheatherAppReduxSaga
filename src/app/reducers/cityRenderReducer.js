import { createReducer } from 'redux-create-reducer';
import { CITY_STATE, FORM_STATE } from '../actions/cityState';

const initialState = false;
const cityRenderReducer = createReducer(initialState, {
  [CITY_STATE](state, action) {
    return action.cityRender;
  },
  [FORM_STATE](state, action) {
    return action.cityRender;
  },
});

export default cityRenderReducer;
