import { call, put, takeLatest } from 'redux-saga/effects';

import fetchWheather from '../api/wheatherApi';
import { saveToStorage } from '../api/storage';

import { receiveWheather, rejectWheather } from '../actions/getWheather';
import { REQUEST_WEATHER } from '../constants/actionTypes';

function* getWheatherData({ location }) {
  try {
    const { data } = yield call(fetchWheather, location);
    yield put(receiveWheather(data));
    yield call(saveToStorage, 'city', data.city.id);
  } catch (err) {
    if (err.response) {
      yield put(rejectWheather(err.response.data.message));
    } else {
      yield put(rejectWheather('You banned define geolocation'));
    }
  }
}

function* getWeatherWatcher() {
  yield takeLatest(REQUEST_WEATHER, getWheatherData);
}

export default getWeatherWatcher;
