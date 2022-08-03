import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type WithRoutPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType = {
    userId: string
}
export type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<WithRoutPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({profile: state.profilePage.profile})
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);