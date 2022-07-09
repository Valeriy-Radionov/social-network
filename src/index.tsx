import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, stateType} from "./redux/redux-store";


let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App store={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})