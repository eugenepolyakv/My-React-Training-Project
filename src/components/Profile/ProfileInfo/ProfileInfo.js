import Preloader from '../../common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProilfeStatusWithHooks';
const ProfileInfo = (props) => {
    console.log('PROFILE INFO RENDER');
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
                {/* <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                /> */}
                {props.status ? (
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                ) : null}
            </div>
            <div>Имя пользователя: {props.currentProfileData.fullName}</div>
        </div>
    );
};

export default ProfileInfo;
