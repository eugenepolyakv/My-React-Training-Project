import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    subscribe,
    addPost,
    updateNewPostText,
    addMessage,
    updateNewTextMessage,
} from './redux/state';
import state from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateNewTextMessage={updateNewTextMessage}
            />
        </React.StrictMode>
    );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
