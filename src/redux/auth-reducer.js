import { usersAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

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
        default:
            return state;
    }
};

export default authReducer;

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    data: userData,
});

export const setUserDataThunkCreator = () => (dispatch) => {
    usersAPI.getAuthStatus().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setUserData(response.data));
        }
    });
};
