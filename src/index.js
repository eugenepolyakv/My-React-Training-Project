import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [{ message: "What's up?" }, { message: "It's my first post" }];

let dialogsData = [
    { id: 1, name: 'Viktor' },
    { id: 2, name: 'Denis' },
    { id: 3, name: 'Natasha' },
    { id: 4, name: 'Kirill' },
];

let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: "What's up" },
    { id: 3, message: "How's it going" },
];

let data = { posts, dialogsData, messageData };

root.render(
    <React.StrictMode>
        <App data={data} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
