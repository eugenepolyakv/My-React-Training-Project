const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SWITCH_FETCHING_CONDITION = 'SWITCH_FETCHING_CONDITION';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 30,
    currentPage: 1,
    isFetching: false,
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
        case SWITCH_FETCHING_CONDITION:
            return {
                ...state,
                isFetching: action.fetching ? false : true,
            };
        default:
            return state;
    }
};
export const switchFetchingCondition = (fetching) => ({
    type: SWITCH_FETCHING_CONDITION,
    fetching,
});
export const changeCurrentPage = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
