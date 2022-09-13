import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./Components/common/Preloader/Preloader";

type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)