import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type WithRoutPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType = {
    userId: string
}
export type ProfileContainerType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    authorizedUserId: number | null
    isAuth: boolean
    status: string
}

class ProfileContainer extends React.Component<WithRoutPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            this.props.authorizedUserId ? (userId = this.props.authorizedUserId.toString()) : ""

        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)
