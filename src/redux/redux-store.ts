import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import {UsersActionType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import sideBarReducer, {SideBarActionType} from "./sideBarReducer";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

export type AppActionsType =
    AuthActionType
    | DialogsActionsType
    | ProfileActionsType
    | SideBarActionType
    | UsersActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store
