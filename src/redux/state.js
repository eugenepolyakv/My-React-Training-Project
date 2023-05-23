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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profileGeneralData.newPostText,
            };
            this._state.profileGeneralData.posts.push(newPost);
            this._state.profileGeneralData.newPostText = '';
            this._callSubscriber(store);
        } else if (action.type === 'UPDATE-POST') {
            this._state.profileGeneralData.newPostText = action.newText;
            this._callSubscriber(store);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesGeneralData.newTextMessage,
            };
            this._state.messagesGeneralData.messageData.push(newMessage);
            this._state.messagesGeneralData.newTextMessage = '';
            this._callSubscriber(store);
        } else if (action.type === 'UPDATE-MESSAGE') {
            this._state.messagesGeneralData.newTextMessage = action.newText;
            this._callSubscriber(store);
        }
    },
};

window.store = store;

export default store;
