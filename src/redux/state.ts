import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
import {PropsType} from "../Components/Profile/MyPosts/Post/Post";
import {MessageType} from "../Components/Dialogs/Message/Message";
import {rerenderEntireTree} from "../render";

export type ProfilePage = {
    posts: PropsType[]
    newPostText: string
}
export type DialogsPage = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type SideBar = {}
export type RootStateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
    sideBar: SideBar
}

export type StateOfData = {
    data: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: "1", message: "Haw are you", likesCount: 12},
            {id: "2", message: "Created react App", likesCount: 2},
            {id: "3", message: "Hi!!!!!!", likesCount: 22},
            {id: "4", message: "Hello, my name is Vasya", likesCount: 12}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Dimych"},
            {id: "2", name: "Andrey"},
            {id: "3", name: "Sveta"},
            {id: "4", name: "Sasha"},
            {id: "5", name: "Victor"},
            {id: "6", name: "Valera"}
        ],
        messages: [
            {id: "1", message: "Hi"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "Yo"},
            {id: "4", message: "Hey"},
            {id: "5", message: "Good day"},
            {id: "6", message: "Hello"}
        ]
    },
    sideBar: {}
}

export let addPost = () => {
    let newPost: PropsType = {id: "5", message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

