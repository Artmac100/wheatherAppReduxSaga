import { call, takeLatest } from 'redux-saga/effects';

import { LOGGED_OUT } from '../constants/actionTypes';
import { deleteFromStorage } from '../api/storage';

function* logoutSaga() {
  yield call(deleteFromStorage, 'token');
}

function* logoutWatcher() {
  yield takeLatest(LOGGED_OUT, logoutSaga);
}

export default logoutWatcher;
