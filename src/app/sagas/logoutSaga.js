import { call, takeLatest } from 'redux-saga/effects';

import { LOGED_OUT } from '../actions/authAction';
import { deleteFromStorage } from '../api/storage';

function* logoutSaga() {
  yield call(deleteFromStorage, 'token');
}


function* logoutWatcher() {
  yield takeLatest(LOGED_OUT, logoutSaga);
}

export default logoutWatcher;
