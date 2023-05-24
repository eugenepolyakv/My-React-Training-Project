import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';
const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let changeDialogueText = (text) => {
                    let action = updateNewMessageActionCreator(text);
                    store.dispatch(action);
                };

                let addNewMessage = () => {
                    let action = addMessageActionCreator();
                    store.dispatch(action);
                };

                return (
                    <Dialogs
                        dialogsData={state.messagesGeneralData.dialogsData}
                        messageData={state.messagesGeneralData.messageData}
                        newTextMessage={
                            state.messagesGeneralData.newTextMessage
                        }
                        addNewMessage={() => addNewMessage()}
                        changeDialogueText={(text) => changeDialogueText(text)}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
