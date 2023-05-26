import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { UserReducer } from './users-reducer';

let reducers = combineReducers({
    profileGeneralData: profileReducer,
    messagesGeneralData: dialogsReducer,
    usersGeneralData: UserReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
