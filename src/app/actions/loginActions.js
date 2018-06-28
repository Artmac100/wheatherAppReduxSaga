import { REQUEST_LOGIN, RESPOND_LOGIN, REJECT_LOGIN } from '../constants/actionTypes';

export const requestLogin = userdata => ({ type: REQUEST_LOGIN, userdata });
export const respondLogin = respond => ({ type: RESPOND_LOGIN, respond });
export const rejectLogin = err => ({ type: REJECT_LOGIN, err });
