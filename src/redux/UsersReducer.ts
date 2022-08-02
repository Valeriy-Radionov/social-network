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
    users: UserType[];
    totalCount: number;
    pageSize: number
    page: number
    error: null;
    isFetching: boolean
}
//Constants
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState: UsersType = {
    users: [],
    totalCount: 0,
    pageSize: 70,
    page: 1,
    error: null,
    isFetching: true
}
export const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE": {
            return {...state, page: action.pageNumber}
        }
        case "SET_TOTAL_COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
//AC Type
type UsersActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageType
    | SetTotalCountType
    | SetIsFetchingACType
//Follow
type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
//Unfollow
type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
// SetUsers
type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

//Set current page
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    } as const
}

//Set total count

type SetTotalCountType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: totalCount
    } as const
}
//Loader
type SetIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}