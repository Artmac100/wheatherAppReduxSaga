import { createReducer } from 'redux-create-reducer';
import { REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER } from '../actions/getWheather';

const initialState = {
  pending: false,
  data: {},
  err: '',
};

const wheatherReducer = createReducer(initialState, {
  [REQUEST_WEATHER](state) {
    return { ...state, pending: true, err: '', data: {} };
  },
  [RECEIVE_WEATHER](state, { data }) {
    return { ...state, data, pending: false };
  },
  [REJECT_WEATHER](state, { err }) {
    return { ...state, err, pending: false };
  },
});

export default wheatherReducer;
