import { REQUEST_WEATHER, RECEIVE_WEATHER, REJECT_WEATHER } from '../actions/getWheather';

const initialState = {
  pending: false,
  data: {},
  err: '',
};

function wheatherReducer(state = initialState, { type, data, err }) {
  switch (type) {
    case REQUEST_WEATHER:
      return { ...state, pending: true, err: '', data: {} };
    case RECEIVE_WEATHER:
      return { ...state, data, pending: false };
    case REJECT_WEATHER:
      return { ...state, err, pending: false };
    default:
      return state;
  }
}

export default wheatherReducer;
