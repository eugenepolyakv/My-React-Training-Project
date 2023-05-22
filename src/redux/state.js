import { rerenderEntireTree } from '../render';

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
    messagesGeneralData: { messageData, dialogsData },
    profileGeneralData: { posts },
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
    };
    state.profileGeneralData.posts.push(newPost);
    rerenderEntireTree(state);
};
export default state;
