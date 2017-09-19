import { createReducer } from 'redux-create-reducer';
import { REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER } from '../actions/getWheather';

const initialState = {
  pending: false,
  data: {},
  fullfilled: false,
  err: '',
};

const wheatherReducer = createReducer(initialState, {
  [REQUEST_WEATHER]: state => ({ ...state, pending: true, err: '', data: {}, fullfilled: false }),
  [RECEIVE_WEATHER]: (state, { data }) => ({ ...state, data, pending: false, fullfilled: true }),
  [REJECT_WEATHER]: (state, { err }) => ({ ...state, err, pending: false }),
});

export default wheatherReducer;
