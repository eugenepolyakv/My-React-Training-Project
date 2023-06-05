import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UnknownPhoto = 'https://cdn-icons-png.flaticon.com/512/37/37943.png';
let initialState = {
    posts: [{ message: "What's up?" }, { message: "It's my first post" }],
    newPostText: '',
    currentProfileData: {},
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_POST:
            return { ...state, newPostText: action.newText };
        case SET_STATUS:
            return { ...state, status: action.status };
        case SET_PROFILE:
            return {
                ...state,
                currentProfileData: {
                    ...action.profileData,
                    photos: {
                        ...action.profileData.photos,
                        small: action.profileData.photos.small || UnknownPhoto,
                    },
                },
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData });
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text,
    };
};
export const setStatus = (status) => {
    return { type: SET_STATUS, status };
};

export const getCurrentProfile = (userID) => (dispatch) => {
    profileAPI.getUserProfile(userID).then((response) => {
        dispatch(setProfile(response.data));
    });
};

export const getUserStatus = (userID) => (dispatch) => {
    profileAPI
        .getStatus(userID)
        .then((response) => dispatch(setStatus(response.data)));
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};
