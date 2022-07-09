import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {StateOfData} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type PostsPropsStateType = {
    // profilePage: ProfilePageType
    store: StateOfData
    // dispatch: (action: ActionsType) => void
}
const Profile = (props: PostsPropsStateType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
            {/*<MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}/>*/}
        </div>
    )
}

export default Profile;