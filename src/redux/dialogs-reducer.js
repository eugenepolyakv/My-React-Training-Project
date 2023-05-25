const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "What's up" },
        { id: 3, message: "How's it going" },
    ],
    dialogsData: [
        { id: 1, name: 'Viktor' },
        { id: 2, name: 'Denis' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Kirill' },
    ],
    newTextMessage: '',
};

export const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    stateCopy.messageData = [...state.messageData];
    stateCopy.dialogsData = [...state.dialogsData];
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newTextMessage,
            };
            stateCopy.messageData.push(newMessage);
            stateCopy.newTextMessage = '';
            return stateCopy;
        case UPDATE_MESSAGE:
            stateCopy.newTextMessage = action.newText;
            return stateCopy;
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
