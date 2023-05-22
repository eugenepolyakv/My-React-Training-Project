import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => <Post {...el} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
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
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>New post</div>
                <div>{postElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
