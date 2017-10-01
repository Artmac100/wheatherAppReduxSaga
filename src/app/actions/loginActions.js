export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RESPOND_LOGIN = 'RESPOND_LOGIN';
export const REJECT_LOGIN = 'REJECT_LOGIN';

export const requestLogin = userdata => ({ type: REQUEST_LOGIN, userdata });
export const respondLogin = respond => ({ type: RESPOND_LOGIN, respond });
export const rejectLogin = err => ({ type: REJECT_LOGIN, err });
