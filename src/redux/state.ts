import {DialogType} from "../Components/Dialogs/DialogItem/DialogItem";
import {PropsType} from "../Components/Profile/MyPosts/Post/Post";
import {MessageType} from "../Components/Dialogs/Message/Message";

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
    dispatch: (action: ActionsType) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    
    dispatch: (action: ActionsType) => void


}

export const store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("The state was change")
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PropsType = {id: "5", message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}
// window.store = store