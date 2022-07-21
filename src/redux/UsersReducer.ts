// export type UserType = {
//     id: string,
//     fullName: string
//     status: string
//     followed: boolean
//     photoUrl: string
//     location: LocationType
// }
// type LocationType = {
//     country: string
//     city: string
// }
// export type UsersType = {
//     users: UserType[]
// }
export type UserType = {
    name: string
    id: number
    photos: Photos
    status: null
    followed: boolean
}
// type LocationType = {
//     country: string
//     city: string
// }
type Photos = {
    small: null
    large: null
}
export type UsersType = {
    items: UserType[];
    totalCount: number;
    error: null;
}
//Constants
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

const initialState: UsersType = {
    items: [],
    totalCount: 0,
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
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}
//AC Type
type UsersActionType = FollowACType | UnfollowACType | SetUsersACType
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