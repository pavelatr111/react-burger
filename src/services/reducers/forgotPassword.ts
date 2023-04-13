import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, TForgotPasswordUnionType } from "../actions/forgotPassword"

type TInitialState = {
    success: boolean,
    message: string,
    feedRequest: boolean,
    feedFailed: boolean,
  }
const initialState: TInitialState = {
    success: false,
    message: '',
    feedRequest: false,
    feedFailed: false,
}

export function forgotPasswordReducer(state = initialState, action: TForgotPasswordUnionType) {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: action.payload,
                // message: action.payload.message,
                feedRequest: false
            }
        }
        case FORGOT_PASSWORD_ERROR: {
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