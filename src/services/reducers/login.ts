import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, TLoginUionType } from "../actions/loginActions"
import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, TUserUnionType, UPDATE_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actions/user"
import { IPersonInfoUser } from "../types/types-api";

type TUser ={
    success: boolean
    logout: boolean
    user: IPersonInfoUser | null
    feedRequest: boolean
    feedFailed: boolean
}
export const initialStateLogin: TUser = {
    success: false,
    logout: false,
    user: null,
    feedRequest: false,
    feedFailed: false,
}

export function loginReducer(state = initialStateLogin, action: TLoginUionType | TUserUnionType) {
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
                user: action.payload,
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
                user: null,
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
        case GET_USER_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                feedRequest: false
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
            }
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                feedRequest: false
            }
        }
        case UPDATE_USER_ERROR: {
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