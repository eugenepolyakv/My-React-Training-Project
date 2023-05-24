import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';
const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let changeTextArea = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                };
                return (
                    <MyPosts
                        updateNewPostText={(text) => changeTextArea(text)}
                        addPost={() => addPost()}
                        posts={state.profileGeneralData.posts}
                        newPostText={state.profileGeneralData.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
