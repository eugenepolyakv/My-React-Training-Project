import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const dataForAuthComponent = (state) => {
    return {
        auth: state.auth.isAuth,
    };
};

export const withoutAuthRedirect = (Component) => {
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

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (props.auth) {
            return <Navigate to="/profile" />;
        }
        return <Component {...props} />;
    };
    return connect(dataForAuthComponent)(RedirectComponent);
};
