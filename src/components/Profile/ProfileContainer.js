import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID || 2;
        this.props.getCurrentProfile(userID);
    }
    render() {
        return <Profile currentProfileData={this.props.currentProfileData} />;
    }
}

let data = (state) => {
    return {
        currentProfileData: state.profileGeneralData.currentProfileData,
    };
};

let callBacks = { getCurrentProfile };

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(data, callBacks)(WithUrlDataContainerComponent);
