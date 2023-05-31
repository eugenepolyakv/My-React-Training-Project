import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { UserReducer } from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profileGeneralData: profileReducer,
    messagesGeneralData: dialogsReducer,
    usersGeneralData: UserReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
