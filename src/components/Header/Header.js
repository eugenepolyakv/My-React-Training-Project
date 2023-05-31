import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"></img>
            </div>
            <div className={classes.login}>
                {props.authState.isAuth ? (
                    props.authState.login
                ) : (
                    <NavLink to="/login">login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
