import { REGISTRATION_ERROR, REGISTRATION_REQUEST, REGISTRATION_SUCCESS } from "../actions/registration"


const initialState = {
    success: false,
    user: {},
    feedRequest: false,
    feedFailed: false,
}

export function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                feedRequest: false
            }
        }
        case REGISTRATION_ERROR: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
            }
        }
        default: {
            return state
        }
    }
}