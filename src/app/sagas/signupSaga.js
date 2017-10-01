import { call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import { signupPost, redirect } from '../api/Api';
import { REQUEST_SIGNUP, respondSignup, rejectSignup } from '../actions/signupActions';


function* signupData({ userdata }) {
  try {
    const data = yield call(signupPost, userdata);
    yield put(respondSignup(data.data));
    yield call(redirect, '/login');
  } catch (err) {
    const signupError = err.response.data.message;
    yield put(rejectSignup(signupError));
    yield put(stopSubmit('submitForm', { username: signupError }));
  }
}


function* signupWatcher() {
  yield takeLatest(REQUEST_SIGNUP, signupData);
}

export default signupWatcher;
