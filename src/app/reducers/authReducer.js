import { createReducer } from 'redux-create-reducer';
import { IS_AUTHENTICATED, LOGED_OUT } from '../actions/authAction';

const initialState = {
  authenticated: false,
  username: '',
};
const authReducer = createReducer(initialState, {
  [IS_AUTHENTICATED]: (state, { payload: { authenticated, username } }) =>
    ({ ...state, authenticated, username }),
  [LOGED_OUT]: state => ({ ...state, ...initialState }),
});

export default authReducer;
