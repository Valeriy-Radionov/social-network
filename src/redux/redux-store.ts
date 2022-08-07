import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./ProfileReducer";
import dialogsReducer, {ActionsDialogsType} from "./DialogsReducer";
import sideBarReducer from "./SideBarReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./auth-reducer";

export type ActionsType = ProfileActionsType | ActionsDialogsType

let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type RootStateType = ReturnType<typeof RootReducer>

export let store = createStore(RootReducer);

// @ts-ignore
window.store = store
