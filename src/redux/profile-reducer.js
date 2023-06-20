import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const SWITCH_EDIT_ERROR_CONDITION = 'SWITCH_EDIT_ERROR_CONDITION';
const UnknownPhoto = 'https://cdn-icons-png.flaticon.com/512/37/37943.png';
let initialState = {
    posts: [{ message: "What's up?" }, { message: "It's my first post" }],
    newPostText: '',
    currentProfileData: {},
    isErrorDuringEditData: false,
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((el) => el != action.id),
            };
        case SET_STATUS:
            return { ...state, status: action.status };
        case UPDATE_USER_DATA:
            // const {
            //     lookingForAJob,
            //     lookingForAJobDescription,
            //     fullName,
            //     ...contacts
            // } = action.data;
            return {
                ...state,
                currentProfileData: {
                    ...state.currentProfileData,
                    ...action.data,
                },
            };
        case SWITCH_EDIT_ERROR_CONDITION:
            return { ...state, isErrorDuringEditData: action.message };
        case SAVE_PHOTO:
            return {
                ...state,
                currentProfileData: {
                    ...state.currentProfileData,
                    photos: action.photos,
                },
            };
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
const switchEditErrorCondition = (message = false) => ({
    type: SWITCH_EDIT_ERROR_CONDITION,
    message,
});
export const deletePostById = () => ({ type: DELETE_POST });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData });
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text,
    };
};
const updateUserDataSuccess = (data) => ({ type: UPDATE_USER_DATA, data });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos });

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

export const updateUserData = (data) => async (dispatch) => {
    const { lookingForAJob, lookingForAJobDescription, fullName, ...contacts } =
        data;
    const validData = {
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        contacts,
        aboutMe: 'something',
    };
    const response = await profileAPI.updateUserData(validData);
    if (response.data.resultCode === 0) {
        dispatch(updateUserDataSuccess(validData));
        return 'Success';
    } else {
        await dispatch(switchEditErrorCondition(response.data.messages[0]));
        dispatch(switchEditErrorCondition());
        return 'Error';
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
