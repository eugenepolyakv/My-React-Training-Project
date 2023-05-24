import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let changeDialogueText = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    };

    let addNewMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            dialogsData={state.messagesGeneralData.dialogsData}
            messageData={state.messagesGeneralData.messageData}
            newTextMessage={state.messagesGeneralData.newTextMessage}
            addNewMessage={() => addNewMessage()}
            changeDialogueText={(text) => changeDialogueText(text)}
        />
    );
};

export default DialogsContainer;
