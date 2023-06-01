import { registrationTest, userTest } from "../../utils/testConstants"
import { REGISTRATION_SUCCESS } from "../actions/registration"
import { initialStateRegistration, registrationReducer } from "./registration"

describe('registration reducer test', () => {
    it('should handle registration success', () => {
        expect(registrationReducer(initialStateRegistration, {type: REGISTRATION_SUCCESS, payload: registrationTest}))
            .toEqual({
                ...initialStateRegistration,
                success: registrationTest.success,
                user: registrationTest.user,
            })
    })
    
})