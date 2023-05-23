import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

let store = {
    _state: {
        messagesGeneralData: {
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
        },
        profileGeneralData: {
            posts: [
                { message: "What's up?" },
                { message: "It's my first post" },
            ],
            newPostText: '',
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {
        this._state.profileGeneralData = profileReducer(
            this._state.profileGeneralData,
            action
        );
        this._state.messagesGeneralData = dialogsReducer(
            this._state.messagesGeneralData,
            action
        );

        this._callSubscriber(store);
    },
};

window.store = store;

export default store;
