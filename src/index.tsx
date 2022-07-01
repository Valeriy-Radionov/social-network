import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import {store} from "./redux/state";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App data={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)