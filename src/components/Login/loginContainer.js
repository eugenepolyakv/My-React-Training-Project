import { withAuthRedirect } from '../../hocs/authRedirect';
import { connect } from 'react-redux';
import Login from './login';
import { getLoggedInThunk } from '../../redux/auth-reducer';

const data = () => {};

const LoginContainer = connect(data, { getLoggedInThunk })(Login);

const withAuthRedirectComponent = withAuthRedirect(LoginContainer);

export default withAuthRedirectComponent;
