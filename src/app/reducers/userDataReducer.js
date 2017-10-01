import { createReducer } from 'redux-create-reducer';
import { REQUEST_USERDATA, RESPOND_USERDATA, REJECT_USERDATA } from '../actions/userDataActions';

const initialState = {
  pending: false,
  data: {},
  fullfilled: false,
  err: '',
};

const userDataReducer = createReducer(initialState, {
  [REQUEST_USERDATA]: state => ({ ...state, pending: true, err: '', data: {}, fullfilled: false }),
  [RESPOND_USERDATA]: (state, { data }) => ({ ...state, data, pending: false, fullfilled: true }),
  [REJECT_USERDATA]: (state, { err }) => ({ ...state, err, pending: false }),
});

export default userDataReducer;
