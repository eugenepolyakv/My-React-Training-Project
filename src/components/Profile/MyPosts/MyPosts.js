import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                <Post message="What's up?" />
                <Post message="It's my first post" />
            </div>
        </div>
    );
};

export default MyPosts;
