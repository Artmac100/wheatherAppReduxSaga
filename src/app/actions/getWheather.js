export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REJECT_WEATHER = 'REJECT_WEATHER';

export const requestWeather = (location) => ({ type: REQUEST_WEATHER, location });
export const receiveWheather = data => ({ type: RECEIVE_WEATHER, data });
export const rejectWheather = err => ({ type: REJECT_WEATHER, err });
