export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RESPOND_SIGNUP = 'RESPOND_SIGNUP';
export const REJECT_SIGNUP = 'REJECT_SIGNUP';

export const requestSignup = userdata => ({ type: REQUEST_SIGNUP, userdata });
export const respondSignup = data => ({ type: RESPOND_SIGNUP, data });
export const rejectSignup = err => ({ type: REJECT_SIGNUP, err });
