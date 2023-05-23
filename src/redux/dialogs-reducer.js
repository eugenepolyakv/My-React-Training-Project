const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newTextMessage,
            };
            state.messageData.push(newMessage);
            state.newTextMessage = '';
            return state;
        case UPDATE_MESSAGE:
            state.newTextMessage = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newText: text,
    };
};
