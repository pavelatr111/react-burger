import { REGISTRATION_ERROR, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, TRegistrationUnionType } from "../actions/registration"
import { IPersonInfoUser } from "../types/types-api";

type TInitialState = {
    success: boolean
    user: IPersonInfoUser | null;
    feedRequest: boolean
    feedFailed: boolean
  }

export const initialStateRegistration: TInitialState = {
    success: false,
    user: null,
    feedRequest: false,
    feedFailed: false,
}

export function registrationReducer(state = initialStateRegistration, action: TRegistrationUnionType) {
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