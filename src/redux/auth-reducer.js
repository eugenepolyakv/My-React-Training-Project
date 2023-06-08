import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true };
        case CLEAR_USER_DATA:
            return { ...state, isAuth: false };
        default:
            return state;
    }
};

export default authReducer;

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    data: userData,
});

const clearUserData = () => {
    return { type: CLEAR_USER_DATA };
};

export const setUserDataThunkCreator = () => (dispatch) => {
    authAPI.getAuthStatus().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData(response.data));
        }
    });
};

export const getLoggedInThunk = (authData) => (dispatch) => {
    authAPI.getLoggedIn(authData).then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData(response.data.userId));
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
