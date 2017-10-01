import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserData, redirect } from '../api/Api';
import { REQUEST_USERDATA, respondUserdata, rejectUserdata } from '../actions/userDataActions';
import { authentication } from '../actions/authAction';
import history from '../history';

function* getUserData() {
  try {
    const data = yield call(fetchUserData);
    if (data.data) {
      yield put(respondUserdata(data.data));
      const { authenticated, username } = data.data;
      yield put(authentication(authenticated, username));
      if (history.location.pathname === '/login') {
        yield call(redirect, '/wheather');
      }
    }
  } catch (err) {
    yield put(rejectUserdata(err.response.data.err));
  }
}


function* userDataWatcher() {
  yield takeLatest(REQUEST_USERDATA, getUserData);
}

export default userDataWatcher;
