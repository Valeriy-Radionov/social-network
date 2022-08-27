import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileType} from "../../redux/profileReducer";

export type PostsPropsStateType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
const Profile = (props: PostsPropsStateType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;