import Preloader from '../../common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div>
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
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
            <div>Имя пользователя: {props.currentProfileData.fullName}</div>
        </div>
    );
};

export default ProfileInfo;
