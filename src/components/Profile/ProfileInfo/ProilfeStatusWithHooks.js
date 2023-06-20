import { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const editStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    const fetchStatusOnServer = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    return (
        <b>
            Status:{' '}
            {editMode && (
                <input
                    onChange={(e) => editStatus(e)}
                    autoFocus={true}
                    value={status}
                    onBlur={() => fetchStatusOnServer()}
                ></input>
            )}
            {!editMode && (
                <span onClick={() => setEditMode(true)}>{status}</span>
            )}
        </b>
    );
};

export default ProfileStatusWithHooks;
