import { combineReducers } from 'redux';

import wheatherReducer from './wheatherReducer';
import cityRenderReducer from './cityRenderReducer';

const reducer = combineReducers({
	wheather: wheatherReducer,
	cityState: cityRenderReducer
});

export default reducer;
