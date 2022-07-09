import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./ProfileReducer";
import dialogsReducer, {DialogsPageType, SendMessageActionType, UpdateNewMessageTextActionType} from "./DialogsReducer";
import sideBarReducer, {SideBarType} from "./SideBarReducer";


export type StateOfData = {
    store: RootStateType
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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
})
export type stateType = ReturnType<typeof reducers>
export type storeType = ReturnType<typeof store.getState>
export let store = createStore(reducers);
export type AppDispatch = typeof store.dispatch
