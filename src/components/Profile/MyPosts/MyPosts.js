import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => <Post {...el} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // props.dispatch(addPostActionCreator());
        props.addPost();
    };

    let onTextAreaChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea
                        onChange={onTextAreaChange}
                        value={props.newPostText}
                        ref={newPostElement}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>New post</div>
                <div>{postElements}</div>
            </div>
        </div>
    );
};

// class MyPosts extends React.Component {
//     componentDidUpdate() {
//         console.log('MYPOSTS RENDER');
//     }

//     render() {
//         console.log('MYPOSTS RENDER');
//         let postElements = this.props.posts.map((el) => <Post {...el} />);

//         let newPostElement = React.createRef();

//         let onAddPost = () => {
//             // props.dispatch(addPostActionCreator());
//             this.props.addPost();
//         };

//         let onTextAreaChange = () => {
//             let text = newPostElement.current.value;
//             this.props.updateNewPostText(text);
//         };

//         return (
//             <div>
//                 My posts
//                 <div>
//                     <div>
//                         <textarea
//                             onChange={onTextAreaChange}
//                             value={this.props.newPostText}
//                             ref={newPostElement}
//                         ></textarea>
//                     </div>
//                     <div>
//                         <button onClick={onAddPost}>Add post</button>
//                     </div>
//                     <div>New post</div>
//                     <div>{postElements}</div>
//                 </div>
//             </div>
//         );
//     }
// }

export default MyPosts;
