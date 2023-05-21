import classes from './Dialogs.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: 'Viktor' },
        { id: 2, name: 'Denis' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Kirill' },
    ];

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: "What's up" },
        { id: 3, message: "How's it going" },
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <Dialogue {...DialogsData[0]} />
                <Dialogue {...DialogsData[1]} />
                <Dialogue {...DialogsData[2]} />
                <Dialogue {...DialogsData[3]} />
            </div>
            <div className={classes.view}>
                <Message {...messageData[0]}></Message>
                <Message {...messageData[1]}></Message>
                <Message {...messageData[2]}></Message>
            </div>
        </div>
    );
};

export default Dialogs;
