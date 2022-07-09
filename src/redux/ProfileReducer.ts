import {ActionsType} from "./redux-store"
import {PropsType} from "../Components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type ProfilePageType = {
    posts: PropsType[]
    newPostText: string
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
let initialState: ProfilePageType =
    {
        posts: [
            {id: "1", message: "Haw are you", likesCount: 12},
            {id: "2", message: "Created react App", likesCount: 2},
            {id: "3", message: "Hi!!!!!!", likesCount: 22},
            {id: "4", message: "Hello, my name is Vasya", likesCount: 12}
        ],
        newPostText: "It camasutra"
    }

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PropsType = {id: "5", message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    const action: AddPostActionType = {type: ADD_POST}
    return action
}
export const updateNewPostTextActionCreator = (text: string) => {
    const action: UpdateNewPostTextActionType = {type: UPDATE_NEW_POST_TEXT, newText: text}
    return action
}
export default profileReducer