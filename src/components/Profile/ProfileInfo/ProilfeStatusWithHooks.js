import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const editStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    const fetchStatusOnServer = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    return (
        <div>
            {editMode && (
                <div>
                    <input
                        onChange={(e) => editStatus(e)}
                        autoFocus={true}
                        value={status}
                        onBlur={() => fetchStatusOnServer()}
                    ></input>
                </div>
            )}
            {!editMode && (
                <div>
                    <span onClick={() => setEditMode(true)}>{status}</span>
                </div>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
