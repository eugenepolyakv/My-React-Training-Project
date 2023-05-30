const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 16,
    currentPage: 2,
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userID) {
                        u.followed = true;
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id == action.userID) {
                        u.followed = false;
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        default:
            return state;
    }
};
export const changeCurrentPageAC = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
