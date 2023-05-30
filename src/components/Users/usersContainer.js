import { connect } from 'react-redux';
import {
    changeCurrentPageAC,
    followAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';

class UsersContainer extends React.Component {
    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };
    onFollowClick = (el) => {
        el.followed
            ? this.props.makePersonUnfollowed(el.id)
            : this.props.makePersonFollowed(el.id);
    };
    render() {
        return (
            <Users
                changeCurrentPage={this.changeCurrentPage}
                onFollowClick={this.onFollowClick}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
            />
        );
    }
}

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

export default connect(data, callBacks)(UsersContainer);
