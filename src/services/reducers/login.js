import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/loginActions.jsx"

const initialState = {
    success: false,
    logout: false,
    user: {},
    feedRequest: false,
    feedFailed: false,
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                feedRequest: false
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logout: action.payload.success,
                user: {},
                feedRequest: false
            }
        }
        case LOGOUT_ERROR: {
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