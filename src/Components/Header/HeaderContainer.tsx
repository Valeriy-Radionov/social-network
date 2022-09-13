import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, AuthUserData, getAuthUserData, logout} from "../../redux/auth-reducer";

import {RootStateType} from "../../redux/redux-store";

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header {...this.props}/>
    }


}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)