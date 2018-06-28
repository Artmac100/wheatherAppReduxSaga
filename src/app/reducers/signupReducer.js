import { createReducer } from 'redux-create-reducer';
import { REQUEST_SIGNUP, RESPOND_SIGNUP, REJECT_SIGNUP } from '../constants/actionTypes';

const initialState = {
  pending: false,
  data: {},
  fullfilled: false,
  err: '',
};

const signupReducer = createReducer(initialState, {
  [REQUEST_SIGNUP]: state => ({ ...state, pending: true, err: '', data: {}, fullfilled: false }),
  [RESPOND_SIGNUP]: (state, { data }) => ({ ...state, data, pending: false, fullfilled: true }),
  [REJECT_SIGNUP]: (state, { err }) => ({ ...state, err, pending: false }),
});

export default signupReducer;
