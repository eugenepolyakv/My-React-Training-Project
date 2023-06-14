import {
    addPostActionCreator,
    deletePostById,
    profileReducer,
} from './profile-reducer';

let state = {
    posts: [{ message: "What's up?" }, { message: "It's my first post" }],
    newPostText: 'something',
};
let action = addPostActionCreator('hey');

let deleteAction = deletePostById(1);
it('new post length must be incremented', () => {
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('message of new post must be correct', () => {
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('something');
});

it('message has to be deleted by its id', () => {
    let newState = profileReducer(state, deleteAction);
    expect(JSON.stringify(newState.posts)).toBe(
        JSON.stringify(state.posts.filter((el) => el != deleteAction.id))
    );
});
