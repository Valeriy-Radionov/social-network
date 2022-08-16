import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, ProfilePageType, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type WithRoutPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType = {
    userId: string
}
export type ProfileContainerType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<WithRoutPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);