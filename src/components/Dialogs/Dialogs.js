import React from 'react';
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

    let dialogueArea = React.createRef();

    let dialogueTextOnChange = () => {
        let text = dialogueArea.current.value;
        props.dispatch({ type: 'UPDATE-MESSAGE', newText: text });
    };

    let newMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>{dialogueElements}</div>
            <div>
                <div className={classes.view}>{messageElements}</div>
                <div>
                    <textarea
                        ref={dialogueArea}
                        onChange={dialogueTextOnChange}
                        value={props.messagesGeneralData.newTextMessage}
                    ></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
