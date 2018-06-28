import { REQUEST_SIGNUP, RESPOND_SIGNUP, REJECT_SIGNUP } from '../constants/actionTypes';

export const requestSignup = userdata => ({ type: REQUEST_SIGNUP, userdata });
export const respondSignup = data => ({ type: RESPOND_SIGNUP, data });
export const rejectSignup = err => ({ type: REJECT_SIGNUP, err });
