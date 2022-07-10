import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, stateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./StoreContext/StoreContext";


let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                {/*<App store={state} dispatch={store.dispatch.bind(store)}/>*/}
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,

        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})