import { RESET_PASSWORD_SUCCESS } from "../actions/resetPassword"
import { initialStateResetPassword, resetPasswordReducer } from "./resetPasswordReducer"

describe('forgot-password reducer test', () => {
    it('should handle reset-password success', () => {
        expect(resetPasswordReducer(initialStateResetPassword, {type: RESET_PASSWORD_SUCCESS,  payload: true }))
            .toEqual({
                ...initialStateResetPassword, success: true
            })
    })
    it('should return the initial state if handle reset-password failed', () => {
        expect(resetPasswordReducer(initialStateResetPassword, {type: RESET_PASSWORD_SUCCESS,  payload: false }))
            .toEqual(initialStateResetPassword) 
    })
})