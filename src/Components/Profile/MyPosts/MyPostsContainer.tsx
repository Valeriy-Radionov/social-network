import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer"
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {PostPropsType} from "./Post/Post";
import Dialogs from "../../Dialogs/Dialogs";


export type MyPostsState = {
    // posts: PropsType[]
    // store: StateOfData
    // newPostText: string
}

type mapStateToPropsType = {
    posts: PostPropsType[]
    newPostText: string
}
type mapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            if (text) {
                dispatch(updateNewPostTextActionCreator(text))
            }
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
