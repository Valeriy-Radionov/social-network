import profileReducer from "./profileReducer";
// import dialogsReducer from "./DialogsReducer";
// import sideBarReducer from "./SideBarReducer";
// import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
// import {PropsType} from "../Components/Profile/MyPosts/Post/Post";
// import {MessageType} from "../Components/Dialogs/Message/Message";
//
// import React from "react";
//
// export type ProfilePage = {
//     posts: PropsType[]
//     newPostText: string
// }
// export type DialogsPage = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     newMessageBody: string
// }
// export type SideBar = {}
// export type RootStateType = {
//     profilePage: ProfilePage
//     dialogsPage: DialogsPage
//     sideBar: SideBar
// }
//
// export type StateOfData = {
//     data: RootStateType
//     dispatch: (action: ActionsType) => void
// }
// export type AddPostActionType = {
//     type: "ADD-POST"
// }
// export type UpdateNewPostTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     newText: string
// }
//
// export type UpdateNewMessageTextActionType = {
//     type: "UPDATE-NEW-MESSAGE-BODY"
//     body: string
// }
//
// export type SendMessageActionType = {
//     type: "SEND-MESSAGE"
// }
//
// export type ActionsType =
//     AddPostActionType
//     | UpdateNewPostTextActionType
//     | UpdateNewMessageTextActionType
//     | SendMessageActionType
//
// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: (state: RootStateType) => void
//
//     subscribe: (observer: (state: RootStateType) => void) => void
//     getState: () => RootStateType
//
//     dispatch: (action: ActionsType) => void
// }
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: "1", message: "Haw are you", likesCount: 12},
//                 {id: "2", message: "Created react App", likesCount: 2},
//                 {id: "3", message: "Hi!!!!!!", likesCount: 22},
//                 {id: "4", message: "Hello, my name is Vasya", likesCount: 12}
//             ],
//             newPostText: "It camasutra"
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: "1", name: "Dimych"},
//                 {id: "2", name: "Andrey"},
//                 {id: "3", name: "Sveta"},
//                 {id: "4", name: "Sasha"},
//                 {id: "5", name: "Victor"},
//                 {id: "6", name: "Valera"}
//             ],
//             messages: [
//                 {id: "1", message: "Hi"},
//                 {id: "2", message: "How are you?"},
//                 {id: "3", message: "Yo"},
//                 {id: "4", message: "Hey"},
//                 {id: "5", message: "Good day"},
//                 {id: "6", message: "Hello"}
//             ],
//             newMessageBody: ""
//         },
//         sideBar: {}
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log("The state was change")
//     },
//     subscribe(observer: (state: RootStateType) => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action)
//         this._callSubscriber(this._state)
//     }
// }
// // window.store = store