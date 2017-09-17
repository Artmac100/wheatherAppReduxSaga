import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Api from '../api/config';

import { REQUEST_WEATHER, receiveWheather, rejectWheather } from '../actions/getWheather';

const save = state => window.localStorage.setItem('city', JSON.stringify(state));

function* getWheatherData({ location }) {
  try {
    const uri = `${Api.baseUrl}forecast?${location}&units=metric&appid=${Api.key}`;
    const data = yield call(axios.get, uri);
    yield put(receiveWheather(data.data));
    yield call(save, data.data.city.id);
  } catch (err) {
    yield put(rejectWheather('not found!'));
  }
}

function* getWeatherWatcher() {
  yield takeLatest(REQUEST_WEATHER, getWheatherData);
}

export default getWeatherWatcher;
