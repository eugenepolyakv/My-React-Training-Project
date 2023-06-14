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
            <MyPostsContainer />
            {/* <MyPosts
                addPost={() => {}}
                updateNewPostText={() => {}}
                newPostText=""
                posts={[]}
            /> */}
        </div>
    );
};

export default Profile;
