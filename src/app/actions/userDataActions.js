import { REQUEST_USERDATA, RESPOND_USERDATA, REJECT_USERDATA } from '../constants/actionTypes';

export const requestUserdata = () => ({ type: REQUEST_USERDATA });
export const respondUserdata = respond => ({ type: RESPOND_USERDATA, respond });
export const rejectUserdata = err => ({ type: REJECT_USERDATA, err });
