import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileType} from "../../redux/profileReducer";

export type PostsPropsStateType = {
    profile: ProfileType
}
const Profile = (props: PostsPropsStateType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store={props.store}/>*/}
            {/*<MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}/>*/}
        </div>
    )
}

export default Profile;