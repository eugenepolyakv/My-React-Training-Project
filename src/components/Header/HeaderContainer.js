import React from 'react';
import Header from './Header';
import { setUserDataThunkCreator as getUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }
    render() {
        return <Header {...this.props} />;
    }
}

const data = (state) => {
    return { authState: state.auth };
};

const callBacks = {
    getUserData,
};

export default connect(data, callBacks)(HeaderContainer);
