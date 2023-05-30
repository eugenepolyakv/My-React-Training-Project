import { connect } from 'react-redux';
import {
    changeCurrentPageAC,
    switchFetchingConditionAC,
    followAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.switchFetchingConditionAC(this.props.isFetching);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.switchFetchingConditionAC(this.props.isFetching);
            });
    };
    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        this.props.switchFetchingConditionAC(this.props.isFetching);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.switchFetchingConditionAC(this.props.isFetching);
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
        switchFetchingConditionAC: (fetching) => {
            let action = switchFetchingConditionAC(fetching);
            dispatch(action);
        },
    };
};

export default connect(data, callBacks)(UsersContainer);
