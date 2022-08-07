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
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

type ActionType = setUserDataType

export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id: userId,
            login: login,
            email: email,
        }
    }
}
