import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                currentProfileData={props.currentProfileData}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
