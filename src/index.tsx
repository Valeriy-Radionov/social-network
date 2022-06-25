import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";
import {state} from "./redux/state";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App data={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)