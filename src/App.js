import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                {/* <Profile /> */}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs
                                    dispatch={props.dispatch}
                                    messagesGeneralData={
                                        props.state.messagesGeneralData
                                    }
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    posts={props.state.profileGeneralData.posts}
                                    newPostText={
                                        props.state.profileGeneralData
                                            .newPostText
                                    }
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
