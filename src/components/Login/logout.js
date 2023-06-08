import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/auth-reducer';
import Login from './loginContainer';
import React from 'react';
const data = (state) => {
    return { isAuth: state.auth.isAuth };
};

class Logout extends React.Component {
    componentDidMount() {
        this.props.logoutThunk();
    }
    render() {
        return <>{this.props.isAuth ? null : <Login />}</>;
    }
}

export default connect(data, { logoutThunk })(Logout);
