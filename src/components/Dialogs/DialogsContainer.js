import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hocs/WithAuthRedirect';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesGeneralData.dialogsData,
        messageData: state.messagesGeneralData.messageData,
        newTextMessage: state.messagesGeneralData.newTextMessage,
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
// const DialogueWithAuthRedirect = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(DialogueWithAuthRedirect);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
