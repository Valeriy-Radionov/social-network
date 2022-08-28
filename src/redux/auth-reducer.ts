import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthUserData = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
let initialState: AuthUserData = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthUserData = initialState, action: AuthActionType): AuthUserData => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export type AuthActionType = setUserDataType

export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id: userId,
            login: login,
            email: email,
            isAuth
        }
    }
}
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}