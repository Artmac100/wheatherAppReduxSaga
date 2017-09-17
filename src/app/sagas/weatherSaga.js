import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Api from '../api/config';

// import '../api/config';
import { REQUEST_WEATHER, receiveWheather, rejectWheather } from '../actions/getWheather';


// console.log(ApiConfig);
function* getWheatherData({ location }) {
  try {
    const uri = `${Api.baseUrl}forecast?q=${location}&units=metric&appid=${Api.key}`;
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
