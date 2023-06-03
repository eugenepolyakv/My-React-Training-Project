import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesGeneralData.dialogsData,
        messageData: state.messagesGeneralData.messageData,
        newTextMessage: state.messagesGeneralData.newTextMessage,
        auth: state.auth.isAuth,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        changeDialogueText: (text) => {
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
