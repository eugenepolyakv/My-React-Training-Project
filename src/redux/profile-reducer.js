const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_ID = 'SET_USER_ID';
const UnknownPhoto = 'https://cdn-icons-png.flaticon.com/512/37/37943.png';
let initialState = {
    posts: [{ message: "What's up?" }, { message: "It's my first post" }],
    newPostText: '',
    currentUserID: 1,
    currentProfileData: {},
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
        case SET_USER_ID:
            return { ...state, currentUserID: action.userID };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData });
export const setCurrentUserID = (userID) => ({ type: SET_USER_ID, userID });
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text,
    };
};
