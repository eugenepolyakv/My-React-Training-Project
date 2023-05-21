import classes from './Dialogs.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
const Dialogs = (props) => {
    // let dialogsData = [
    //     { id: 1, name: 'Viktor' },
    //     { id: 2, name: 'Denis' },
    //     { id: 3, name: 'Natasha' },
    //     { id: 4, name: 'Kirill' },
    // ];

    // let messageData = [
    //     { id: 1, message: 'Hi' },
    //     { id: 2, message: "What's up" },
    //     { id: 3, message: "How's it going" },
    // ];

    // let dialogueElements = [
    //     <Dialogue {...dialogsData[0]} />,
    //     <Dialogue {...dialogsData[1]} />,
    //     <Dialogue {...dialogsData[2]} />,
    //     <Dialogue {...dialogsData[3]} />,
    // ];

    let dialogueElements = props.dialogsData.map((el) => <Dialogue {...el} />);

    // let messageElements = [
    //     <Message {...messageData[0]}></Message>,
    //     <Message {...messageData[1]}></Message>,
    //     <Message {...messageData[2]}></Message>,
    // ];
    let messageElements = props.messageData.map((el) => (
        <Message {...el}></Message>
    ));
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>{dialogueElements}</div>
            <div className={classes.view}>{messageElements}</div>
        </div>
    );
};

export default Dialogs;
