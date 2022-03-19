import {
    LOGIN_REQUEST_SENT,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    SIGNUP_REQUEST_SENT,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE,
    INFO_REQUEST_SENT,
    INFO_REQUEST_SUCCESS,
    INFO_REQUEST_FAILURE,
    LOGOUT_REQUEST_SENT,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAILURE
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

export const signup = ({ name, email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST_SENT });
        fetch('/api/user/create', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
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

export const getUser = () => {
    return (dispatch) => {
        dispatch({ type: INFO_REQUEST_SENT });
        fetch('/api/auth/user', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.user) dispatch({ type: INFO_REQUEST_SUCCESS, payload: res.user });
                else dispatch({ type: INFO_REQUEST_FAILURE, payload: { error: true } });
            })
            .catch((err) => dispatch({ type: INFO_REQUEST_FAILURE, payload: { error: true } }));
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_REQUEST_SENT });
        fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.message === 'success') dispatch({ type: LOGOUT_REQUEST_SUCCESS });
                else dispatch({ type: LOGOUT_REQUEST_FAILURE, payload: { error: true } });
            })
            .catch((err) => dispatch({ type: LOGOUT_REQUEST_FAILURE, payload: { error: true } }));
    };
}
