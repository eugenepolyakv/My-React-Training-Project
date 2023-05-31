import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID;
        if (!userID) {
            userID = 2;
        }
        debugger;
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userID}`
            )
            .then((response) => {
                this.props.setProfile(response.data);
            });
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

let callBacks = { setProfile };

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
