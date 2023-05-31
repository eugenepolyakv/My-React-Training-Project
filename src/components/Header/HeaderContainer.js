import React from 'react';
import Header from './Header';
import axios from 'axios';
import { setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }
            });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const data = (state) => {
    return { authState: state.auth };
};

const callBacks = {
    setUserData,
};

export default connect(data, callBacks)(HeaderContainer);
