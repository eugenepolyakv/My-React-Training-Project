import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getCurrentProfile,
    getUserStatus,
    updateUserStatus,
} from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hocs/WithAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID || 29194;
        this.props.getCurrentProfile(userID);
        this.props.getUserStatus(userID);
    }

    render() {
        return (
            <Profile
                currentProfileData={this.props.currentProfileData}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        );
    }
}

let dataForPresentionalComponent = (state) => {
    return {
        currentProfileData: state.profileGeneralData.currentProfileData,
        status: state.profileGeneralData.status,
    };
};

let callBacks = { getCurrentProfile, getUserStatus, updateUserStatus };

// let WithAuthRedirectComponent = withAuthRedirect(ProfileContainer);

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}

// let WithUrlDataContainerComponent = withRouter(WithAuthRedirectComponent);

export default compose(
    connect(dataForPresentionalComponent, callBacks),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// export default connect(
//     dataForPresentionalComponent,
//     callBacks
// )(WithUrlDataContainerComponent);
