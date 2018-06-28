import { REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER } from '../constants/actionTypes';

export const requestWeather = location => ({ type: REQUEST_WEATHER, location });
export const receiveWheather = data => ({ type: RECEIVE_WEATHER, data });
export const rejectWheather = err => ({ type: REJECT_WEATHER, err });
