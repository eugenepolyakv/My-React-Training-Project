import { NavLink } from 'react-router-dom';

const Dialogue = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default Dialogue;
