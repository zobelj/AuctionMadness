export const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const SIGNUP_REQUEST_SENT = 'SIGNUP_REQUEST_SENT';
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS';
export const SIGNUP_REQUEST_FAILURE = 'SIGNUP_REQUEST_FAILURE';

export const INFO_REQUEST_SENT = 'INFO_REQUEST_SENT';
export const INFO_REQUEST_SUCCESS = 'INFO_REQUEST_SUCCESS';
export const INFO_REQUEST_FAILURE = 'INFO_REQUEST_FAILURE';

import * as AuthActions from './actions';

export default AuthActions;
export { default as AuthReducer } from './reducer'