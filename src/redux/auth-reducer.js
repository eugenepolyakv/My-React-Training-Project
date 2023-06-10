import { authAPI } from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const SWITCH_AUTH_ERROR_CONDITION = 'SWITCH_AUTH_ERROR_CONDITION';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isErrorDuringAuth: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true };
        case CLEAR_USER_DATA:
            return { ...state, isAuth: false };
        case SWITCH_AUTH_ERROR_CONDITION:
            return {
                ...state,
                isErrorDuringAuth: action.data,
            };
        default:
            return state;
    }
};

export default authReducer;

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    data: userData,
});

const switchAuthErrorCondition = (errorMessage = false) => ({
    type: SWITCH_AUTH_ERROR_CONDITION,
    data: errorMessage,
});

const clearUserData = () => {
    return { type: CLEAR_USER_DATA };
};

export const setUserDataThunkCreator = () => (dispatch) => {
    authAPI.getAuthStatus().then((response) => {
        if (response.resultCode === 0) {
            response.data['userId'] = response.data['id'];
            delete response.data['id'];
            dispatch(setUserData(response.data));
        }
    });
};

export const getLoggedInThunk = (authData) => (dispatch) => {
    authAPI.getLoggedIn(authData).then(async (response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData(response.data));
        } else {
            await dispatch(switchAuthErrorCondition(response.messages[0]));
            dispatch(switchAuthErrorCondition());
        }
    });
};

export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(clearUserData());
        }
    });
};
