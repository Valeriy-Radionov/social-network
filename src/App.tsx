import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {StateOfData} from "./redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App: React.FC<StateOfData> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile store={props}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
