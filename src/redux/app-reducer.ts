import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
type initialAppStateType = {
    initialized: boolean
}
let initialState: initialAppStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType): initialAppStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

//actions

export type AppActionType = InitializedSuccessType
export type InitializedSuccessType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

//thunks

export const initializeApp = (): AppThunk => async (dispatch) => {
    try {
        let result = await dispatch(getAuthUserData())
    } catch (e) {
        console.log(e)
    }
    dispatch(initializedSuccessAC())
}