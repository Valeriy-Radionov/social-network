export type UserType = {
    name: string
    id: number
    photos: Photos
    status: null
    followed: boolean
}

type Photos = {
    small: null
    large: null
}
export type UsersType = {
    items: UserType[];
    totalCount: number;
    pageSize: number
    page: number
    error: null;
}
//Constants
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

const initialState: UsersType = {
    items: [],
    totalCount: 0,
    pageSize: 70,
    page: 2,
    error: null
}
export const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case "SET-USERS":
            return {...state, items: action.users}
        case "SET_CURRENT_PAGE": {
            return {...state, page: action.pageNumber}
        }
        case "SET_TOTAL_COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        default:
            return state
    }
}
//AC Type
type UsersActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageType | SetTotalCountType
//Follow
type FollowACType = ReturnType<typeof FollowAC>
export const FollowAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
//Unfollow
type UnfollowACType = ReturnType<typeof UnfollowAC>
export const UnfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
// SetUsers
type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

//Set current page
type SetCurrentPageType = ReturnType<typeof SetCurrentPageAC>
export const SetCurrentPageAC = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    } as const
}

//Set total count

type SetTotalCountType = ReturnType<typeof SetTotalCountAC>
export const SetTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: totalCount
    } as const
}