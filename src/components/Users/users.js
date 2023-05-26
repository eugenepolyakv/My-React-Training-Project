import c from './users.module.css';
import User from './user/user';
const Users = (props) => {
    debugger;
    if (props.users.length == 0) {
        props.setUsers([
            {
                id: 1,
                username: 'Denis',
                location: {
                    country: 'Russia',
                    city: 'Samara',
                },
                status: 'wwwww',
                followed: false,
            },
            {
                id: 2,
                username: 'Valera',
                location: {
                    country: 'Russia',
                    city: 'Samara',
                },
                status: 'dwddad',
                followed: true,
            },
            {
                id: 3,
                username: 'Kolya',
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                },
                status: 'xxxxxxxx',
                followed: false,
            },
        ]);
    }
    debugger;
    const Users = props.users.map((el) => (
        <User
            {...el}
            makePersonFollowed={props.makePersonFollowed}
            makePersonUnfollowed={props.makePersonUnfollowed}
        />
    ));
    return (
        <div>
            Users
            <div className={c.mainDiv}>{Users}</div>
        </div>
    );
};

export default Users;
