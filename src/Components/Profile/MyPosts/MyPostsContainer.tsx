import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post, {PropsType} from "./Post/Post";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer"
import MyPosts from "./MyPosts";
import {storeStateType, store, StateOfData} from "../../../redux/redux-store";


export type MyPostsState = {
    // posts: PropsType[]
    store: StateOfData
    // newPostText: string
}

const MyPostsContainer = (props: MyPostsState) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }
    const onPostChange = (text: string) => {
        if (text) {
            store.dispatch(updateNewPostTextActionCreator(text))
        }
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
                 newPostText={props.store.data.profilePage.newPostText}/>
    )

}
export default MyPostsContainer