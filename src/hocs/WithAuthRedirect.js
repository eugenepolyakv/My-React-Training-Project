import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const dataForAuthComponent = (state) => {
    return {
        auth: state.auth.isAuth,
    };
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) {
                return <Navigate to="/login" />;
            }
            return <Component {...this.props} />;
        }
    }
    let ConnectedAuthRedirectComponent =
        connect(dataForAuthComponent)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
};
