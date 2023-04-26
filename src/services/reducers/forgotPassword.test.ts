import { FORGOT_PASSWORD_SUCCESS } from "../actions/forgotPassword"
import { forgotPasswordReducer, initialStateForgot } from "./forgotPassword"


describe('forgot-password reducer test', () => {
    it('should handle forgot-password success', () => {
        expect(forgotPasswordReducer(initialStateForgot, {type: FORGOT_PASSWORD_SUCCESS,  payload: true }))
            .toEqual({
                ...initialStateForgot, success: true
            })
    })
    it('should return the initial state if handle forgot-password failed', () => {
        expect(forgotPasswordReducer(initialStateForgot, {type: FORGOT_PASSWORD_SUCCESS,  payload: false }))
            .toEqual(initialStateForgot)
    })
})