import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/loginContainer';
import Logout from './components/Login/logout';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer.js')
);

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    // componentDidUpdate() {
    //     this.props.initializeApp();
    //     // if (!this.props.authState.login) {
    //     //     this.props.getUserData();
    //     // }
    // }

    render() {
        if (!this.props.initialized) return <Preloader />;
        return (
            <HashRouter basename="/">
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <React.Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/profile" />}
                                />
                                <Route
                                    path="/dialogs/"
                                    element={<DialogsContainer />}
                                    // element={<DialogsContainer />}
                                />
                                <Route
                                    path="/profile/:userID?"
                                    element={<ProfileContainer />}
                                />
                                <Route path="/news" element={<News />} />
                                <Route path="/music" element={<Music />} />
                                <Route
                                    path="/settings"
                                    element={<Settings />}
                                />
                                <Route
                                    path="/users"
                                    element={<UsersContainer />}
                                />
                                <Route path="/login" element={<Login />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route
                                    path="*"
                                    element={<div>404 not found</div>}
                                />
                            </Routes>
                        </React.Suspense>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const AppWithProvider = (Component) => {
    const app = () => {
        return (
            <Provider store={store}>
                <Component />
            </Provider>
        );
    };
    return app;
};

// const AppWithProvider = (Component) => {
//     return (
//         <Provider store={store}>
//             <Component />
//         </Provider>
//     );
// };

const data = (state) => {
    return { initialized: state.appInitialized.initialized };
};

const callBacks = {
    initializeApp,
};

export default AppWithProvider(connect(data, callBacks)(App));
