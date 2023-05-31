import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { Connect, connect } from 'react-redux';
import { setProfile } from '../../redux/profile-reducer';
class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentUserID}`
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
        currentUserID: state.profileGeneralData.currentUserID,
        currentProfileData: state.profileGeneralData.currentProfileData,
    };
};

let callBacks = { setProfile };

export default connect(data, callBacks)(ProfileContainer);
