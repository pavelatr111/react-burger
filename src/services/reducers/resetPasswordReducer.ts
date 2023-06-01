import { RESET_PASSWORD_ERROR, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, TResetPasswordUnionType } from "../actions/resetPassword"

export const initialStateResetPassword = {
    success: false,
    message: '',
    feedRequest: false,
    feedFailed: false,
}

export function resetPasswordReducer(state = initialStateResetPassword, action: TResetPasswordUnionType) {

    switch (action.type) {
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: action.payload,
                feedRequest: false
            }
        }
        case RESET_PASSWORD_ERROR: {
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