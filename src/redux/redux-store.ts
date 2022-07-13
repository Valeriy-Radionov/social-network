import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./ProfileReducer";
import dialogsReducer, {ActionsDialogsType} from "./DialogsReducer";
import sideBarReducer from "./SideBarReducer";

export type ActionsType = ProfileActionsType | ActionsDialogsType

let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
})
export type RootStateType = ReturnType<typeof RootReducer>

export let store = createStore(RootReducer);
