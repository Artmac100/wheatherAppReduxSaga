import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { REQUEST_WEATHER, receiveWheather, rejectWheather } from '../actions/getWheather';

function* getWheatherData({ location }) {
  try {
    const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=7b73e121615e24db4857c74001da7e35`;
    const data = yield call(axios.get, uri);
    yield put(receiveWheather(data.data));
  } catch (err) {
    yield put(rejectWheather('not found!'));
  }
}

function* getWeatherWatcher() {
  yield takeLatest(REQUEST_WEATHER, getWheatherData);
}

export default getWeatherWatcher;
