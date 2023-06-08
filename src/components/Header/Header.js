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
                    <div className={classes.dropdown}>
                        <button className={classes.dropbtn}>
                            {props.authState.login}
                        </button>
                        <div className={classes.dropdownContent}>
                            <NavLink to="/logout">logout</NavLink>
                        </div>
                    </div>
                ) : (
                    <NavLink to="/login">login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
