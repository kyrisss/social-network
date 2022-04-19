import samuraiApi from "../api/api";

type PostType = {
    post: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}



let initialStore = {
    postsData: [
        { post: "Hello" },
        { post: "Hi, how are you?" },
        { post: "My first message" }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}

type InitialStoreType = typeof initialStore



const profileReducer = (state = initialStore, action):InitialStoreType => {

    switch (action.type) {
        case "SET_PHOTO":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos.photos
                }
            }
        case "NEW-POST":
            return {
                ...state,
                postsData: [...state.postsData, { post: action.newPostText }],
            }
        case "SET_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

type NEW_POST_TYPE = {
    type: "NEW-POST"
    newPostText: string
}

export const NEW_POST = (newPostText:string):NEW_POST_TYPE => {
    return {
        type: "NEW-POST",
        newPostText
    }
}

type SET_PROFILE_TYPE = {
    type: "SET_PROFILE"
    profile: ProfileType
}

export const SET_PROFILE = (profile:ProfileType):SET_PROFILE_TYPE => {

    return {
        type: "SET_PROFILE",
        profile
    }
}

type SET_STATUS_TYPE = {
    type: "SET_STATUS"
    status: string
}

export const SET_STATUS = (status:string):SET_STATUS_TYPE => {
    return {
        type: "SET_STATUS",
        status
    }
}

type UPDATE_STATUS_TYPE = {
    type: "UPDATE_STATUS"
    status: string
}

export const UPDATE_STATUS = (status:string):UPDATE_STATUS_TYPE => {
    return {
        type: "UPDATE_STATUS",
        status
    }
}

type SET_PHOTO_TYPE = {
    type: "SET_PHOTO"
    photos: PhotosType
}

export const SET_PHOTO = (photos:PhotosType):SET_PHOTO_TYPE =>{
    
    return {
        type: "SET_PHOTO",
        photos: photos
    }
}

export const getProfileTC = (userId) => {
    return (dispatch) => {
        samuraiApi.getProfile(userId)
            .then(data => {
                dispatch(SET_PROFILE(data))
            })
    }
}

export const getStatusTC = (id) => {
    return (dispatch) => {
        samuraiApi.getStatus(id)
            .then(status => {
                dispatch(SET_STATUS(status))
            })
    }
}

export const updateStatusTC = (status) => {
    return (dispatch) => {
        samuraiApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(UPDATE_STATUS(status))
                }
            })
    }
}

export const loginTC = (data) => {
    return (dispatch) => {
        samuraiApi.login(data)
    }
}

export const setPhotoTC = (file) => {
    return (dispatch) => {
        samuraiApi.setPhoto(file)
            .then(response => {
                dispatch(SET_PHOTO(response.data.data))
                
            })
    }
}

export default profileReducer;
