import Preloader from '../../common/Preloader/Preloader';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={c.imgOnAllWidth}>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
            </div>
            <div>
                <img
                    src={
                        props.currentProfileData.photos === undefined ? (
                            <Preloader />
                        ) : (
                            props.currentProfileData.photos.small
                        )
                    }
                />
            </div>
            <div>Имя пользователя: {props.currentProfileData.fullName}</div>
        </div>
    );
};

export default ProfileInfo;
