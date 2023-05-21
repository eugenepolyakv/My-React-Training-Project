import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.messages}>
                <div>
                    <NavLink to="/dialogs/1">Valera</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2">Denis</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3">Natasha</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/4">Kirill</NavLink>
                </div>
            </div>
            <div className={classes.view}></div>
        </div>
    );
};

export default Dialogs;
