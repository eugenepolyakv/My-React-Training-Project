let rerenderEntireTree = () => {
    console.log('State changed');
};

let posts = [{ message: "What's up?" }, { message: "It's my first post" }];

let dialogsData = [
    { id: 1, name: 'Viktor' },
    { id: 2, name: 'Denis' },
    { id: 3, name: 'Natasha' },
    { id: 4, name: 'Kirill' },
];

let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: "What's up" },
    { id: 3, message: "How's it going" },
];

let state = {
    messagesGeneralData: { messageData, dialogsData, newTextMessage: '' },
    profileGeneralData: { posts, newPostText: '' },
};

window.state = state;

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesGeneralData.newTextMessage,
    };
    state.messagesGeneralData.messageData.push(newMessage);
    state.messagesGeneralData.newTextMessage = '';
    rerenderEntireTree(state);
};

export let updateNewTextMessage = (newText) => {
    state.messagesGeneralData.newTextMessage = newText;
    rerenderEntireTree(state);
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profileGeneralData.newPostText,
    };
    state.profileGeneralData.posts.push(newPost);
    state.profileGeneralData.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profileGeneralData.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
