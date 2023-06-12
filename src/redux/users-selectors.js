import { createSelector } from 'reselect';

export const getUsers = (state) => {
    return state.usersGeneralData.users;
};

export const getUsersReselector = createSelector(getUsers, (users) => {
    return users.filter((el) => true);
});

export const getPageSize = (state) => {
    return state.usersGeneralData.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersGeneralData.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersGeneralData.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersGeneralData.isFetching;
};
