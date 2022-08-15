import {ActionsType} from "./redux-store"

export type SideBarType = {}

const initialState: SideBarType = {}

const sideBarReducer = (state: SideBarType = initialState, action: SideBarActionType): SideBarType => {

    return state
}

type SideBarActionType = sideBarReducerACType

type sideBarReducerACType = ReturnType<typeof sideBarReducerAC>
const sideBarReducerAC = () => {
    return {}
}

export default sideBarReducer