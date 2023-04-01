import { forgotPassword } from "../../utils/MainAPI";



export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export function forgotPasswordActions(email) {
    return function (dispatch) {
        dispatch  ({
            type: FORGOT_PASSWORD_REQUEST
        })
        forgotPassword(email)
            .then(({ success }) => {
                dispatch  ({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: success
                });
            })
            .catch((e) => {
                dispatch  ({
                    type: FORGOT_PASSWORD_ERROR
                })
            })
    }
}