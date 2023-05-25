import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
// let action = addPostActionCreator();
// store.dispatch(action);
//                 };

//                 let changeTextArea = (text) => {
// let action = updateNewPostActionCreator(text);
// store.dispatch(action);
//                 };
//                 return (
//                     <MyPosts
//                         updateNewPostText={(text) => changeTextArea(text)}
//                         addPost={() => addPost()}
//                         posts={state.profileGeneralData.posts}
//                         newPostText={state.profileGeneralData.newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

function mapStateToProps(state) {
    return {
        posts: state.profileGeneralData.posts,
        newPostText: state.profileGeneralData.newPostText,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
