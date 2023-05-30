import { connect } from 'react-redux';
import Users from './usersClass';
import {
    changeCurrentPageAC,
    followAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/users-reducer';

const data = (state) => {
    return {
        users: state.usersGeneralData.users,
        pageSize: state.usersGeneralData.pageSize,
        totalUsersCount: state.usersGeneralData.totalUsersCount,
        currentPage: state.usersGeneralData.currentPage,
    };
};
const callBacks = (dispatch) => {
    return {
        makePersonFollowed: (userID) => {
            let action = followAC(userID);
            dispatch(action);
        },
        makePersonUnfollowed: (userID) => {
            let action = unfollowAC(userID);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        changeCurrentPage: (page) => {
            let action = changeCurrentPageAC(page);
            dispatch(action);
        },
    };
};

const UsersContainer = connect(data, callBacks)(Users);
export default UsersContainer;
