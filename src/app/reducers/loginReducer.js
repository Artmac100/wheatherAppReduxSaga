import { createReducer } from 'redux-create-reducer';
import { REQUEST_LOGIN, RESPOND_LOGIN, REJECT_LOGIN } from '../constants/actionTypes';

const initialState = {
  pending: false,
  data: {},
  fullfilled: false,
  err: '',
};

const loginReducer = createReducer(initialState, {
  [REQUEST_LOGIN]: state => ({ ...state, pending: true, err: '', data: {}, fullfilled: false }),
  [RESPOND_LOGIN]: (state, { data }) => ({ ...state, data, pending: false, fullfilled: true }),
  [REJECT_LOGIN]: (state, { err }) => ({ ...state, err, pending: false }),
});

export default loginReducer;
