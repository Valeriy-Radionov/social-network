import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import sideBarReducer from "./sideBarReducer";
import dialogsReducer, {ActionsDialogsType} from "./dialogsReducer";
import thunkMiddleware from "redux-thunk";


export type ActionsType = ProfileActionsType | ActionsDialogsType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store
