import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, AuthUserData} from "../../redux/auth-reducer";

type HeaderContainerType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }


}

const mapStateToProps = (state: AuthUserData) => ({
    isAuth: state.isAuth,
    login: state.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)