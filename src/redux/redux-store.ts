import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./ProfileReducer";
import dialogsReducer, {DialogsPageType, SendMessageActionType, UpdateNewMessageTextActionType} from "./DialogsReducer";
import sideBarReducer, {SideBarType} from "./SideBarReducer";

export type StateOfData = {
    data: RootStateType
    dispatch: (action: ActionsType) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | SendMessageActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
} as const)

export type storeStateType = ReturnType<typeof reducers>
export let store: storeStateType = createStore(reducers);
