import { connect } from 'react-redux';
import {
    changeCurrentPage,
    getUsersThunkCreator,
    changeFollowConditionThunkCreator,
} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hocs/WithAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount = () => {
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
        users: state.usersGeneralData.users,
        pageSize: state.usersGeneralData.pageSize,
        totalUsersCount: state.usersGeneralData.totalUsersCount,
        currentPage: state.usersGeneralData.currentPage,
        isFetching: state.usersGeneralData.isFetching,
        currentUserID: state.profileGeneralData.currentUserID,
        followInProgress: state.usersGeneralData.followInProgress,
    };
};

let callBacks = {
    changeCurrentPage,
    getUsersThunkCreator,
    changeFollowConditionThunkCreator,
};

let WithAuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(data, callBacks)(WithAuthRedirectComponent);
