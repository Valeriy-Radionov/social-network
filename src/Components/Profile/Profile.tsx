import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileType, updateStatus} from "../../redux/profileReducer";

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
            {/*<MyPostsContainer store={props.store}/>*/}
            {/*<MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}/>*/}
        </div>
    )
}

export default Profile;