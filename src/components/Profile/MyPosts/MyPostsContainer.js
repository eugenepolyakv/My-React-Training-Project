import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let changeTextArea = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={(text) => changeTextArea(text)}
            addPost={() => addPost()}
            posts={state.profileGeneralData.posts}
            newPostText={state.profileGeneralData.newPostText}
        />
    );
};

export default MyPostsContainer;
