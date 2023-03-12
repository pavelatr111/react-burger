import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actions/user";

const initialState = {
    success: false,
    user: {
        email: '',
        name: ''
    },
    feedRequest: false,
    feedFailed: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
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