import classes from './Dialogs.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
const Dialogs = (props) => {
    let dialogueElements = props.messagesGeneralData.dialogsData.map((el) => (
        <Dialogue {...el} />
    ));
    let messageElements = props.messagesGeneralData.messageData.map((el) => (
        <Message {...el}></Message>
    ));

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>{dialogueElements}</div>
            <div>
                <div className={classes.view}>{messageElements}</div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
