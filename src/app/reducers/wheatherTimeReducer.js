import { createReducer } from 'redux-create-reducer';
import { WHEATHER_TIME } from '../actions/wheatherTime';

const initialState = {
  index: 0,
};

const wheatherTimeReducer = createReducer(initialState, {
  [WHEATHER_TIME](state, { index }) {
    return { ...state, index };
  },
});

export default wheatherTimeReducer;
