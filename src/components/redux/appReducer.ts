import { authMeTC } from "./authReducer.ts"

type InitialStoreType = {
    initialized: boolean
}

let initialStore: InitialStoreType = {
    initialized: false
}

const appReducer = (state = initialStore, action):InitialStoreType => {
    switch (action.type) {
        case "SET_INITIALIZE":
            
            return {
                ...state,
                initialized: true
            }
        default:
            return {
                ...state
            }
    }
}

type SET_INITIALIZE_TYPE = {
    type: "SET_INITIALIZE"
}

const SET_INITIALIZE = ():SET_INITIALIZE_TYPE => {
    return {
        type: "SET_INITIALIZE"
    }
}

export const setInitailizeTC = () => {
    return (dispatch) => {
        let promise = dispatch(authMeTC())
            Promise.all([promise]).then(() => dispatch(SET_INITIALIZE()))
    }
}

export default appReducer;