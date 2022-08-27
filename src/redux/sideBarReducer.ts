export type SideBarType = {}

const initialState: SideBarType = {}

const sideBarReducer = (state: SideBarType = initialState, action: SideBarActionType): SideBarType => {

    return state
}

export type SideBarActionType = sideBarReducerACType

type sideBarReducerACType = ReturnType<typeof sideBarReducerAC>
const sideBarReducerAC = () => {
    return {
        type: "SHOW-SIDE-BAR"
    } as const
}

export default sideBarReducer