import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SWITCH_FETCHING_CONDITION = 'SWITCH_FETCHING_CONDITION';
const SWITCH_FOLLOW_IN_PROGRESS_CONDITION =
    'SWITCH_FOLLOW_IN_PROGRESS_CONDITION';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 30,
    currentPage: 1,
    isFetching: false,
    followInProgress: [],
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
                isFetching: action.fetching,
            };
        case SWITCH_FOLLOW_IN_PROGRESS_CONDITION:
            return {
                ...state,
                followInProgress: action.fetching
                    ? [...state.followInProgress, action.userID]
                    : state.followInProgress.filter(
                          (el) => el != action.userID
                      ),
            };
        default:
            return state;
    }
};
export const switchFetchingCondition = (fetching) => ({
    type: SWITCH_FETCHING_CONDITION,
    fetching,
});
export const switchFollowInProgressCondition = (fetching, userID) => ({
    type: SWITCH_FOLLOW_IN_PROGRESS_CONDITION,
    fetching,
    userID,
});
export const changeCurrentPage = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const followAction = (userID) => ({ type: FOLLOW, userID });
export const unfollowAction = (userID) => ({ type: UNFOLLOW, userID });

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(switchFetchingCondition(true));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(setUsers(response.items));
            dispatch(switchFetchingCondition(false));
        });
    };
};

export const changeFollowConditionThunkCreator = (userID, isFollowed) => {
    return async (dispatch) => {
        dispatch(switchFollowInProgressCondition(true, userID));
        isFollowed
            ? await usersAPI.unfollowPerson(userID).then((response) => {
                  if (response.resultCode === 0) {
                      dispatch(unfollowAction(userID));
                  }
              })
            : await usersAPI.followPerson(userID).then((response) => {
                  if (response.resultCode === 0) {
                      dispatch(followAction(userID));
                  }
              });
        dispatch(switchFollowInProgressCondition(false, userID));
    };
};
