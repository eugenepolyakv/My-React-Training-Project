import Preloader from '../../common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProilfeStatusWithHooks';
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
                <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                {/* {props.status ? (
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                ) : (
                    <Preloader />
                )} */}
            </div>
            <div>Имя пользователя: {props.currentProfileData.fullName}</div>
        </div>
    );
};

export default ProfileInfo;
