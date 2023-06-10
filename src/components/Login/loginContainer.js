import { withAuthRedirect } from '../../hocs/authRedirect';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { LoginForm } from './login';
import { getLoggedInThunk } from '../../redux/auth-reducer';
import React from 'react';

const data = (state) => {
    return { isError: state.auth.isErrorDuringAuth };
};

class LoginClass extends React.Component {
    state = {
        email: '',
        password: '',
        rememberMe: false,
        isError: this.props.isError,
    };

    validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (values.email.length > 30) {
            errors.email = 'Must be 30 characters or less';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
        }
        return errors;
    };

    componentDidUpdate(prevProps) {
        if (prevProps.isError !== this.props.isError) {
            if (this.props.isError) {
                this.setState({ isError: true });
            }
        }
    }

    handleChange = () => {
        if (this.state.isError) {
            this.setState({ isError: false });
        }
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Login</h1>
                <Formik
                    initialValues={{
                        ...this.state,
                    }}
                    validate={this.validate}
                    onSubmit={(values) => {
                        this.props.getLoggedInThunk(values);
                    }}
                    enableReinitialize={true}
                    children={(props) => {
                        return (
                            <LoginForm
                                {...props}
                                handleChange={this.handleChange}
                            ></LoginForm>
                        );
                    }}
                ></Formik>
            </div>
        );
    }
}

const LoginContainer = connect(data, { getLoggedInThunk })(LoginClass);

const withAuthRedirectComponent = withAuthRedirect(LoginContainer);

export default withAuthRedirectComponent;
