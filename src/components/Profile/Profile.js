import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    );
};

export default Profile;
