import samuraiApi from "../api/api";

type PhotosType = {
    small: string
    large: string
}

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

let initialStore = {
    users: [] as Array<UserType>,
    totalCount: 100,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    isFollowing: [] as Array<boolean>
}

type InitialStoreType = typeof initialStore

const friendsReducer = (state = initialStore, action):InitialStoreType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "CHANGE_PAGE":
            return {
                ...state,
                currentPage: action.numberPage
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            }
        case "TOGGLE_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_FOLLOWING":
            return {
                ...state,
                isFollowing: action.isFollowing ? [...state.isFollowing, action.id] : state.isFollowing.filter(id => id != action.id)
            }
        default:
            return state
    }
}

type FOLLOW_TYPE = {
    type: "FOLLOW"
    id: number
}

export const FOLLOW = (id:number):FOLLOW_TYPE => {
    return {
        type: "FOLLOW",
        id: id
    }
}

type SET_USERS_TYPE = {
    type: "SET_USERS"
    users: Array<UserType>
}

export const SET_USERS = (users:Array<UserType>):SET_USERS_TYPE => {
    return {
        type: "SET_USERS",
        users
    }
}

type CHANGE_PAGE_TYPE = {
    type:"CHANGE_PAGE"
    numberPage: number
}

export const CHANGE_PAGE = (numberPage:number):CHANGE_PAGE_TYPE => {
    return {
        type: "CHANGE_PAGE",
        numberPage
    }
}

type SET_TOTAL_COUNT_TYPE = {
    type:"SET_TOTAL_COUNT"
    totalCount: number
}

export const SET_TOTAL_COUNT = (totalCount:number):SET_TOTAL_COUNT_TYPE => {
    return {
        type: "SET_TOTAL_COUNT",
        totalCount
    }
}

type TOGGLE_FETCHING_TYPE = {
    type:"TOGGLE_FETCHING"
    isFetching: boolean
}

export const TOGGLE_FETCHING = (bool:boolean):TOGGLE_FETCHING_TYPE => {
    return {
        type: "TOGGLE_FETCHING",
        isFetching: bool
    }
}

type TOGGLE_FOLLOWING_TYPE = {
    type:"TOGGLE_FOLLOWING"
    isFollowing: boolean
    id:number
}

export const TOGGLE_FOLLOWING = (isFollowing:boolean, id:number):TOGGLE_FOLLOWING_TYPE => {
    return {
        type: "TOGGLE_FOLLOWING",
        isFollowing,
        id
    }
}

export const getUsersTC = (currentPage:number, pageSize:number) => {
    return (dispatch) => {
        dispatch(TOGGLE_FETCHING(true))
        samuraiApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(TOGGLE_FETCHING(false))
                dispatch(SET_USERS(data.items))
                dispatch(SET_TOTAL_COUNT(data.totalCount))
            })
    }
}

export const getPageUsersTC = (numberPage:number, pageSize:number) => {
    return (dispatch) => {
        dispatch(CHANGE_PAGE(numberPage))
        dispatch(TOGGLE_FETCHING(true))
        samuraiApi.getPageUsers(numberPage, pageSize)
            .then(data => {
                dispatch(TOGGLE_FETCHING(false))
                dispatch(SET_USERS(data.items))
            })
    }
}

export const followTC = (userId:number) => {
    return (dispatch) => {
        dispatch(TOGGLE_FOLLOWING(true, userId))
        samuraiApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(FOLLOW(userId))
                }
                dispatch(TOGGLE_FOLLOWING(false, userId))
            })
    }
}

export const unfollowTC = (userId:number) => {
    return (dispatch) => {
        dispatch(TOGGLE_FOLLOWING(true, userId))
        samuraiApi.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(FOLLOW(userId))
                }
                dispatch(TOGGLE_FOLLOWING(false, userId))
            })

    }
}


export default friendsReducer;