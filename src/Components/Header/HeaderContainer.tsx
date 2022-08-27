import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, AuthUserData, getAuthUserData} from "../../redux/auth-reducer";

import {RootStateType} from "../../redux/redux-store";

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }


}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)