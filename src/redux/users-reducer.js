const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        // {
        //     id: 1,
        //     username: 'Denis',
        //     location: {
        //         country: 'Russia',
        //         city: 'Samara',
        //     },
        //     status: 'wwwww',
        //     followed: false,
        // },
        // {
        //     id: 2,
        //     username: 'Valera',
        //     location: {
        //         country: 'Russia',
        //         city: 'Samara',
        //     },
        //     status: 'dwddad',
        //     followed: true,
        // },
        // {
        //     id: 3,
        //     username: 'Kolya',
        //     location: {
        //         country: 'Belarus',
        //         city: 'Minsk',
        //     },
        //     status: 'xxxxxxxx',
        //     followed: false,
        // },
    ],
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                // ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userID) {
                        u.followed = true;
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                // ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userID) {
                        u.followed = false;
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
