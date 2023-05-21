import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [{ message: "What's up?" }, { message: "It's my first post" }];

    let postElements = posts.map((el) => <Post {...el} />);
    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                {/* <Post message="What's up?" />
                <Post message="It's my first post" /> */}
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
