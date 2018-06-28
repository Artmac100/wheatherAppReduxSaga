import { createReducer } from 'redux-create-reducer';
import { WHEATHER_TIME } from '../constants/actionTypes';

const initialState = {
  index: 0,
};

const wheatherTimeReducer = createReducer(initialState, {
  [WHEATHER_TIME]: (state, { index }) => ({ ...state, index }),
});

export default wheatherTimeReducer;
