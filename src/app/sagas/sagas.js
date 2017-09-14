import { call, put, takeEvery,takeLatest, all, fork } from 'redux-saga/effects';
import axios from 'axios';


import getWeatherWatcher from './weatherSaga';



export default function* sagaRoot() {
	yield all([
		fork(getWeatherWatcher)
	])
}