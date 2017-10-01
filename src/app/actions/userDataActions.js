export const REQUEST_USERDATA = 'REQUEST_USERDATA';
export const RESPOND_USERDATA = 'RESPOND_USERDATA';
export const REJECT_USERDATA = 'REJECT_USERDATA';

export const requestUserdata = () => ({ type: REQUEST_USERDATA });
export const respondUserdata = respond => ({ type: RESPOND_USERDATA, respond });
export const rejectUserdata = err => ({ type: REJECT_USERDATA, err });
