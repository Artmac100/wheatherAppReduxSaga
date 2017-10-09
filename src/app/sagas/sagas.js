import { all, fork } from 'redux-saga/effects';

import getWeatherWatcher from './weatherSaga';
import signupWatcher from './signupSaga';
import loginWatcher from './loginSaga';
import userDataWatcher from './getUserDataSaga';
import logoutWatcher from './logoutSaga';

function* sagaRoot() {
  yield all([
    fork(getWeatherWatcher),
    fork(signupWatcher),
    fork(loginWatcher),
    fork(userDataWatcher),
    fork(logoutWatcher),
  ]);
}

export default sagaRoot;
