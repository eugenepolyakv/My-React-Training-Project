import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo currentProfileData={props.currentProfileData} />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
