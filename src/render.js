import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import { addNPost } from './redux/state'
import { updateNewPostText } from './redux/state'

// addPost('This message is added from index.js');
// addPost('This one more message is added from index.js');

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <App state={state} addNPost={addNPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();