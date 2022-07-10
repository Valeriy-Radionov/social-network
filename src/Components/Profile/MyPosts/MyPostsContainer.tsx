import React, {useContext} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer"
import MyPosts from "./MyPosts";
import {store, StateOfData} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext/StoreContext";


export type MyPostsState = {
    // posts: PropsType[]
    // store: StateOfData
    // newPostText: string
}

const MyPostsContainer = (props: MyPostsState) => {

    const AppContext = useContext(StoreContext)
    let addPost = () => {
        AppContext.dispatch(addPostActionCreator())

    }
    const onPostChange = (text: string) => {
        if (text) {
            AppContext.dispatch(updateNewPostTextActionCreator(text))
        }
    }
    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    posts={AppContext.getState().profilePage.posts}
                    newPostText={AppContext.getState().profilePage.newPostText}/>


}

export default MyPostsContainer