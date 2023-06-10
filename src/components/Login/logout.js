import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import Login from './loginContainer';
import React from 'react';
import { compose } from 'redux';
const data = (state) => {
    return { isAuth: state.auth.isAuth };
};

class Logout extends React.Component {
    componentDidMount() {
        this.props.logoutThunk();
    }
    render() {
        return <>{this.props.isAuth ? null : <Navigate to="/login" />}</>;
    }
}

export default connect(data, { logoutThunk })(Logout);
