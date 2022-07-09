import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {StateOfData} from "./redux/redux-store";

const App: React.FC<StateOfData> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.data.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path="/profile"
                           render={() => <Profile store={props}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
