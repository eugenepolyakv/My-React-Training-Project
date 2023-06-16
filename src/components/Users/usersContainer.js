import { connect } from 'react-redux';
import {
    changeCurrentPage,
    getUsersThunkCreator,
    changeFollowConditionThunkCreator,
    setTotalUserCountThunk,
} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withoutAuthRedirect } from '../../hocs/authRedirect';
import {
    getUsers,
    getUsersReselector,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.setTotalUserCountThunk();
        this.props.getUsersThunkCreator(
            this.props.currentPage,
            this.props.pageSize
        );
    };
    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
        // this.props.switchFetchingCondition(this.props.isFetching);
        // usersAPI.getUsers(page, this.props.pageSize).then((response) => {
        //     this.props.setUsers(response.items);
        //     this.props.switchFetchingCondition(this.props.isFetching);
        // });
    };
    render() {
        console.log('USERS RENDER');
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Users
                    changeCurrentPage={this.changeCurrentPage}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    followInProgress={this.props.followInProgress}
                    changeFollowConditionThunkCreator={
                        this.props.changeFollowConditionThunkCreator
                    }
                />
            </>
        );
    }
}

const data = (state) => {
    return {
        users: getUsersReselector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        currentUserID: state.profileGeneralData.currentUserID,
        followInProgress: state.usersGeneralData.followInProgress,
    };
};

let callBacks = {
    changeCurrentPage,
    getUsersThunkCreator,
    changeFollowConditionThunkCreator,
    setTotalUserCountThunk,
};

let WithAuthRedirectComponent = withoutAuthRedirect(UsersContainer);

export default connect(data, callBacks)(WithAuthRedirectComponent);
