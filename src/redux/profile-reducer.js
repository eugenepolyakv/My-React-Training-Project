const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
    posts: [{ message: "What's up?" }, { message: "It's my first post" }],
    newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    stateCopy.posts = [...state.posts];
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_POST:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text,
    };
};
