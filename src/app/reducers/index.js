import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cityRenderReducer from './cityRenderReducer';
import wheatherTimeReducer from './wheatherTimeReducer';
import wheatherReducer from './wheatherReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import userDataReducer from './userDataReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
  wheather: wheatherReducer,
  cityState: cityRenderReducer,
  wheatherTime: wheatherTimeReducer,
  form: formReducer,
  signup: signupReducer,
  login: loginReducer,
  userData: userDataReducer,
  authState: authReducer,
});

export default reducer;
