import { call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import { loginPost, redirect } from '../api/Api';
import { saveToStorage } from '../api/storage';
import { respondLogin, rejectLogin } from '../actions/loginActions';
import { REQUEST_LOGIN } from '../constants/actionTypes';
import { authentication } from '../actions/authAction';

function* loginData({ userdata }) {
  try {
    const { data } = yield call(loginPost, userdata);
    const { authenticated, username, token } = data;
    yield put(respondLogin(data));
    yield put(authentication(authenticated, username));
    yield call(saveToStorage, 'token', token);
    yield call(redirect, '/wheather');
  } catch (err) {
    const signupError = err.response.data.message;
    yield put(rejectLogin(signupError));
    yield put(stopSubmit('loginForm', { username: signupError }));
  }
}

function* loginWatcher() {
  yield takeLatest(REQUEST_LOGIN, loginData);
}

export default loginWatcher;
