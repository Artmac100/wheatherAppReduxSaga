import { combineReducers } from 'redux';

import cityRenderReducer from './cityRenderReducer';
import wheatherTimeReducer from './wheatherTimeReducer';
import wheatherReducer from './wheatherReducer';

const reducer = combineReducers({
  wheather: wheatherReducer,
  cityState: cityRenderReducer,
  wheatherTime: wheatherTimeReducer,
});

export default reducer;
