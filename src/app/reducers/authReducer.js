import { createReducer } from 'redux-create-reducer';
import { IS_AUTHENTICATED, LOGGED_OUT } from '../constants/actionTypes';

const initialState = {
  authenticated: false,
  username: '',
};
const authReducer = createReducer(initialState, {
  [IS_AUTHENTICATED]: (state, { payload: { authenticated, username } }) => ({
    ...state,
    authenticated,
    username,
  }),
  [LOGGED_OUT]: state => ({ ...state, ...initialState }),
});

export default authReducer;
