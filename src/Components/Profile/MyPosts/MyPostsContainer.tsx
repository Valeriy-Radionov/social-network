import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer"
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {PostPropsType} from "./Post/Post";

type mapStateToPropsType = {
    posts: PostPropsType[]
}
type mapDispatchToProps = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
