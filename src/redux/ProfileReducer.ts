import {ActionsType} from "./redux-store"
import post, {PostPropsType} from "../Components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type ProfileType = {
    aboutMe?: string;
    contacts?: Contacts;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
    userId?: number;
    photos?: Photos;
}

export type Contacts = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type Photos = {
    small: string
    large: string
}


export type ProfilePageType = {
    posts: PostPropsType[]
    profile: ProfileType
    newPostText: string
}

let initialState: ProfilePageType =
    {
        posts: [
            {id: "1", message: "Haw are you", likesCount: 12},
            {id: "2", message: "Created react App", likesCount: 2},
            {id: "3", message: "Hi!!!!!!", likesCount: 22},
            {id: "4", message: "Hello, my name is Vasya", likesCount: 12}
        ],
        newPostText: "It camasutra",
        profile: {}
    }

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType = {id: "5", message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export default profileReducer