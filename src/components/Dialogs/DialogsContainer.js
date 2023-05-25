import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let changeDialogueText = (text) => {
//                     let action = updateNewMessageActionCreator(text);
//                     store.dispatch(action);
//                 };

//                 let addNewMessage = () => {
//                     let action = addMessageActionCreator();
//                     store.dispatch(action);
//                 };

//                 return (
//                     <Dialogs
//                         dialogsData={state.messagesGeneralData.dialogsData}
//                         messageData={state.messagesGeneralData.messageData}
//                         newTextMessage={
//                             state.messagesGeneralData.newTextMessage
//                         }
//                         addNewMessage={() => addNewMessage()}
//                         changeDialogueText={(text) => changeDialogueText(text)}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
