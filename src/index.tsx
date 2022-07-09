import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, RootStateType} from "./redux/redux-store";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App data={state} dispatch={store.dispatch.bind(store)} store={store}/>, /// все работает без store подумать как store прокинуть в  APP
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})