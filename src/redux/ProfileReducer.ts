import {ActionsType, AddPostActionType, ProfilePage, UpdateNewPostTextActionType} from "./state";
import {PropsType} from "../Components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: ProfilePage, action: ActionsType) => {
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