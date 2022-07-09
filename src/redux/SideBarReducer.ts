import {ActionsType} from "./redux-store"

export type SideBarType = {}

const initialState: SideBarType = {}

const sideBarReducer = (state: SideBarType = initialState, action: ActionsType) => {

    return state
}
export default sideBarReducer