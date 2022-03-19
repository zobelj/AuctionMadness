import {
    LOGIN_REQUEST_SENT,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_SENT,
    SIGNUP_REQUEST_FAILURE,
    INFO_REQUEST_SENT,
    INFO_REQUEST_SUCCESS,
    INFO_REQUEST_FAILURE
} from '.'

const DEFAULT_STATE = Object.freeze({
    user: null,
    error: false
})

const AuthReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SENT:
            return {
                user: action.payload
            };
        case LOGIN_REQUEST_SUCCESS:
            return {
                user: action.payload
            };
        case LOGIN_REQUEST_FAILURE:
            return {
                error: action.payload.error
            };
        case SIGNUP_REQUEST_SENT:
            return {
                user: action.payload
            };
        case SIGNUP_REQUEST_SUCCESS:
            return {
                user: action.payload
            };
        case SIGNUP_REQUEST_FAILURE:
            return {
                error: action.payload.error
            };
        case INFO_REQUEST_SENT:
            return state;
        case INFO_REQUEST_SUCCESS:
            return {
                user: action.payload
            };
        case INFO_REQUEST_FAILURE:
            return DEFAULT_STATE;
        default:
            return state;
    }
}

export default AuthReducer;