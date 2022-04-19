import samuraiApi from "../api/api";

type InitialStoreType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    profile: ProfileType
}

type ProfileType = {
    photos: {
        small: string | null,
            large: string | null
    }
}

let initialStore: InitialStoreType = {
    id: 2,
    email: null,
    login: null,
    isAuth: false,
    profile: {
        photos: {
            small: null,
            large: null
        }
    }
}

const authReducer = (state = initialStore, action): InitialStoreType => {
    switch (action.type) {
        case "SET_AUTH_USER":
            return {
                ...state,
                ...action.data
            }
        case "SET_AUTH_PROFILE":
            return {
                ...state,
                profile: { ...action.profile }
            }
        default:
            return state
    }
}

type SET_AUTH_USER_DATA_TYPE = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

type SET_AUTH_USER_TYPE = {
    type: "SET_AUTH_USER",
    data: SET_AUTH_USER_DATA_TYPE
}

export const SET_AUTH_USER = (id:number, login:string, email:string, isAuth:boolean):SET_AUTH_USER_TYPE => {
    return {
        type: "SET_AUTH_USER",
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
}

type SET_AUTH_PROFILE = {
    type: "SET_AUTH_PROFILE",
    profile: ProfileType
}

export const SET_AUTH_PROFILE = (profile:ProfileType) => {
    return {
        type: "SET_AUTH_PROFILE",
        profile
    }
}

export const authMeTC = () => {
    return (dispatch) => {
        return samuraiApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data
                    dispatch(SET_AUTH_USER(id, login, email, true))

                    samuraiApi.getProfile(id)
                        .then(data => {
                            dispatch(SET_AUTH_PROFILE(data))
                        })
                }

            })
    }
}


export const loginTC = (formData) => {
    return (dispatch) => {
        samuraiApi.login(formData)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(authMeTC())
                }
            })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        samuraiApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SET_AUTH_USER(null, null, null, false))
                }
            })
    }
}
export default authReducer;