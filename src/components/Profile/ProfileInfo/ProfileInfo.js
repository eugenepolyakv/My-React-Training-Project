import Preloader from '../../common/Preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProilfeStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';
const ProfileInfo = (props) => {
    console.log('PROFILE INFO RENDER');
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };
    const { userId, contacts, photos, aboutMe, ...otherProp } =
        props.currentProfileData;
    const structuredProfileData = { ...otherProp, ...contacts };
    const [editMode, setEditMode] = useState(false);

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
                {props.isOwner && (
                    <input type="file" onChange={onMainPhotoSelected} />
                )}
                <div>
                    {props.status ? (
                        <ProfileStatusWithHooks
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                    ) : null}
                </div>
                {editMode ? (
                    <ProfileDataForm
                        profile={structuredProfileData}
                        deactivateEditMode={() => setEditMode(false)}
                    />
                ) : (
                    <ProfileData
                        profile={props.currentProfileData}
                        isOwner={props.isOwner}
                        activateEditMode={() => setEditMode(true)}
                    />
                )}

                {/* <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                /> */}
            </div>
        </div>
    );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={activateEditMode}>edit</button>
                </div>
            )}
            <div>
                <b>Full name: {profile.fullName}</b>
            </div>
            <div>
                <b>
                    Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
                </b>
            </div>
            <div>
                <b>
                    My professional skills: {profile.lookingForAJobDescription}
                </b>
            </div>
            <div>
                <b>
                    Contacts:{' '}
                    {Object.keys(profile).length != 0
                        ? Object.keys(profile.contacts).map((key) => (
                              <div className={c.contact}>
                                  <Contacts
                                      contactKey={key}
                                      contactValue={profile.contacts[key]}
                                  />
                              </div>
                          ))
                        : null}
                </b>
            </div>
        </div>
    );
};

const Contacts = ({ contactKey, contactValue }) => {
    return (
        <div>
            <b>{contactKey}</b>: {contactValue}
        </div>
    );
};

export default ProfileInfo;
