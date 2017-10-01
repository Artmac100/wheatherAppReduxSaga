export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const LOGED_OUT = 'LOGED_OUT';

export const authentication = (authenticated, username) => ({ type: IS_AUTHENTICATED, payload: { authenticated, username } });
export const logingOut = () => ({ type: LOGED_OUT });
