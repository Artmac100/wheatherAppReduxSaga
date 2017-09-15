import { CITY_STATE, FORM_STATE } from '../actions/cityState';

function cityRenderReducer(state = false, action) {
  switch (action.type) {
    case CITY_STATE:
      return action.cityRender;
    case FORM_STATE:
      return action.cityRender;
    default:
      return state;
  }
}

export default cityRenderReducer;
