import React from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogueElements = props.dialogsData.map((el) => <Dialogue {...el} />);
    let messageElements = props.messageData.map((el) => (
        <Message {...el}></Message>
    ));

    let dialogueArea = React.createRef();

    let onChangeDialogueText = () => {
        let text = dialogueArea.current.value;
        props.changeDialogueText(text);
    };

    let onSendMessage = () => {
        props.addNewMessage();
    };

    if (!props.auth) {
        return <Navigate to="/login" />;
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>{dialogueElements}</div>
            <div>
                <div className={classes.view}>{messageElements}</div>
                <div>
                    <textarea
                        ref={dialogueArea}
                        onChange={onChangeDialogueText}
                        value={props.newTextMessage}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
