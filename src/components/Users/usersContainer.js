import { connect } from 'react-redux';
import {
    changeCurrentPage,
    switchFetchingCondition,
    follow,
    setUsers,
    unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.switchFetchingCondition(this.props.isFetching);
        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((response) => {
                this.props.setUsers(response.items);
                this.props.switchFetchingCondition(this.props.isFetching);
            });
    };
    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        this.props.switchFetchingCondition(this.props.isFetching);
        usersAPI.getUsers(page, this.props.pageSize).then((response) => {
            this.props.setUsers(response.items);
            this.props.switchFetchingCondition(this.props.isFetching);
        });
    };
    onFollowClick = (el) => {
        el.followed
            ? this.props.makePersonUnfollowed(el.id)
            : this.props.makePersonFollowed(el.id);
    };
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Users
                    changeCurrentPage={this.changeCurrentPage}
                    onFollowClick={this.onFollowClick}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

const data = (state) => {
    return {
        users: state.usersGeneralData.users,
        pageSize: state.usersGeneralData.pageSize,
        totalUsersCount: state.usersGeneralData.totalUsersCount,
        currentPage: state.usersGeneralData.currentPage,
        isFetching: state.usersGeneralData.isFetching,
        currentUserID: state.profileGeneralData.currentUserID,
    };
};

let callBacks = {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    switchFetchingCondition,
};

export default connect(data, callBacks)(UsersContainer);
