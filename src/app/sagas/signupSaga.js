import { call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import { signUpPost, redirect } from '../api/Api';
import { respondSignup, rejectSignup } from '../actions/signupActions';
import { REQUEST_SIGNUP } from '../constants/actionTypes';

function* signupData({ userdata }) {
  try {
    const { data } = yield call(signUpPost, userdata);
    yield put(respondSignup(data));
    yield call(redirect, '/login');
  } catch (err) {
    const signupError = err.response.data.message;
    yield put(rejectSignup(signupError));
    yield put(stopSubmit('submitForm', { username: signupError }));
  }
}

function* signUpWatcher() {
  yield takeLatest(REQUEST_SIGNUP, signupData);
}

export default signUpWatcher;
