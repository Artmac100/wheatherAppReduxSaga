import { IS_AUTHENTICATED, LOGGED_OUT } from '../constants/actionTypes';

export const authentication = (authenticated, username) => ({
  type: IS_AUTHENTICATED,
  payload: { authenticated, username },
});
export const logingOut = () => ({ type: LOGGED_OUT });
