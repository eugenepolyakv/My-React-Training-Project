import c from './users.module.css';
import User from './user/user';
import axios from 'axios';
const Users = (props) => {
    if (props.users.length == 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => props.setUsers(response.data.items));

        // props.setUsers([
        //     {
        //         id: 1,
        //         username: 'Denis',
        //         location: {
        //             country: 'Russia',
        //             city: 'Samara',
        //         },
        //         status: 'wwwww',
        //         followed: false,
        //     },
        //     {
        //         id: 2,
        //         username: 'Valera',
        //         location: {
        //             country: 'Russia',
        //             city: 'Samara',
        //         },
        //         status: 'dwddad',
        //         followed: true,
        //     },
        //     {
        //         id: 3,
        //         username: 'Kolya',
        //         location: {
        //             country: 'Belarus',
        //             city: 'Minsk',
        //         },
        //         status: 'xxxxxxxx',
        //         followed: false,
        //     },
        // ]);
    }
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
