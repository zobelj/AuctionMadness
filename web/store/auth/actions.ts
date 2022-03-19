import {
    LOGIN_REQUEST_SENT,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    SIGNUP_REQUEST_SENT,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE
} from '.';

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST_SENT });
        fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.user) dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.user });
                else dispatch({ type: LOGIN_REQUEST_FAILURE, payload: { error: true } });
            })
            .catch((err) => dispatch({ type: LOGIN_REQUEST_FAILURE, payload: { error: true } }));
    };
};

export const signup = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST_SENT });
        fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.user) dispatch({ type: SIGNUP_REQUEST_SUCCESS, payload: res.user });
                else dispatch({ type: SIGNUP_REQUEST_FAILURE, payload: { error: true } });
            })
            .catch((err) => dispatch({ type: SIGNUP_REQUEST_FAILURE, payload: { error: true } }));
    };
};
