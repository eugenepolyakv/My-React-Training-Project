import c from './user.module.css';

const User = (props) => {
    let onButtonClick = () =>
        props.followed
            ? props.makePersonUnfollowed(props.id)
            : props.makePersonFollowed(props.id);
    return (
        <div className={c.wrapper}>
            <div className={c.pictureForProfile}>
                <img src="https://cdn-icons-png.flaticon.com/512/37/37943.png" />
                <div>
                    <button id={props.id} onClick={onButtonClick}>
                        {props.followed ? 'Follow' : 'Unfollow'}
                    </button>
                </div>
            </div>
            <div className={c.information}>
                <div className={c.wrapper}>
                    <div>{props.username}</div>
                    <div className={c.location}>
                        {props.location.country + ' ' + props.location.city}
                    </div>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    );
};

export default User;
