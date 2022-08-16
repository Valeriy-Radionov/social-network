import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthUserData = {
    id: number
    login: string
    email: string
    isAuth: boolean
}
let initialState: AuthUserData = {
    id: 1,
    login: "loginExample",
    email: "ffrf@test.com",
    isAuth: false
}

export const authReducer = (state: AuthUserData = initialState, action: ActionType): AuthUserData => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

type ActionType = setUserDataType

export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, login: string, email: string,) => {
    return {
        type: SET_USER_DATA,
        data: {
            id: userId,
            login: login,
            email: email,
        }
    }
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    })
}