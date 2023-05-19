import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={classes.imgOnAllWidth}>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
            </div>
            <div>pfp + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;