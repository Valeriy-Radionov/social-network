import {PostPropsType} from "../Components/Profile/MyPosts/Post/Post";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type ProfileType = {
    aboutMe?: string;
    contacts?: Contacts;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
    userId?: string;
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
    status: string
}

let initialState: ProfilePageType =
    {
        posts: [
            {id: "1", message: "Haw are you", likesCount: 12},
            {id: "2", message: "Created react App", likesCount: 2},
            {id: "3", message: "Hi!!!!!!", likesCount: 22},
            {id: "4", message: "Hello, my name is Vasya", likesCount: 12}
        ],
        profile: {},
        status: ""
    }

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType = {id: "5", message: action.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export type ProfileActionsType =
    AddPostActionType
    | setUserProfileType
    | setUserStatusType

type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

type setUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}


export default profileReducer