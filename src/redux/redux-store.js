import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { UserReducer } from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profileGeneralData: profileReducer,
    messagesGeneralData: dialogsReducer,
    usersGeneralData: UserReducer,
    auth: authReducer,
    appInitialized: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
