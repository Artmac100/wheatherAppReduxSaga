import { all, fork } from 'redux-saga/effects';

import getWeatherWatcher from './weatherSaga';

function* sagaRoot() {
  yield all([fork(getWeatherWatcher)]);
}

export default sagaRoot;
