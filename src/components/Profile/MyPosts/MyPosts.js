import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map((el) => <Post {...el} />);
    return (
        <div>
            My posts
            <div>New post</div>
            <div>{postElements}</div>
        </div>
    );
};

export default MyPosts;
