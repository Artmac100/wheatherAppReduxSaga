import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserData, redirect } from '../api/Api';
import { respondUserdata, rejectUserdata } from '../actions/userDataActions';
import { REQUEST_USERDATA } from '../constants/actionTypes';
import { authentication } from '../actions/authAction';
import { deleteFromStorage } from '../api/storage';
import history from '../history';

function* getUserData() {
  try {
    const { data } = yield call(fetchUserData);
    if (!data) throw new Error('User is not authenticated');
    yield put(respondUserdata(data));
    const { authenticated, username } = data;
    yield put(authentication(authenticated, username));
    if (history.location.pathname === '/login') {
      yield call(redirect, '/wheather');
    }
  } catch (err) {
    if (err.response) {
      yield put(rejectUserdata(err.response.data.err));
      yield call(deleteFromStorage, 'token');
    } else {
      yield put(rejectUserdata(err.message));
    }
  }
}

function* userDataWatcher() {
  yield takeLatest(REQUEST_USERDATA, getUserData);
}

export default userDataWatcher;
